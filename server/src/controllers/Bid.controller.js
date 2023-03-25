const { createBid } = require('../events/listeners/bid-listener');
const { Bid, Winner, Product, User } = require('../models');
const { sequelize } = require('sequelize');

exports.create = async (req, res, next) => {
  // const data = req.body;
  // data.user = req.user;

  //cornJob
  //if time expire 
  // return time is over
  // hit getTopBidder() 
  // return message: " Bid is over", data: {winnerdata:""}
  //else 
  // store the data in postgresql
  // store the data in redis
  //redis.set('new-bid-{product-id}$${user-id}$${timestamp}', '')
  //hmset(`new-bid-${product-id}$${user-id}$${timestamp}`, 'product-id', 1235, user-id,'1', 'user_name', jake, 'bidAmount', 21);
  // socket response

  // createBid(data);
  // res.status(201).json({
  //     success: true,
  //     data: data
  // })

  try {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ error: 'Product not found' });

    const currentTime = new Date();
    if (currentTime < product.startbid || currentTime > product.endbid) {
      return res.status(400).json({ error: 'Bidding is not currently open for this product' });
    }

    const existingBid = await Bid.findOne({
      where: { productId: product.id, userId: req.user.id }
    });

    if (existingBid) {
      if (req.body.amount <= existingBid.amount) {
        return res.status(400).json({ error: 'Your new bid must be higher than your previous bid' });
      }

      existingBid.amount = req.body.amount;
      await existingBid.save();
      return res.status(200).json({ message: 'Bid updated successfully' });
    }

    const bid = await Bid.create({
      amount: req.body.amount,
      timestamp: currentTime,
      productId: product.id,
      userId: req.user.id
    });

    res.status(201).json({ message: 'Bid placed successfully', bid: bid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

//get data
exports.getBid = async (req, res, next) => {
  // const bidId = req.body.bidId
  //const bidData = Bid.findAll({ where:{bidId:bidId}})
  // res.status(201).json({message: "All data", data: bidData})
}

//top bidders data
exports.getTopBidder = async (req, res, next) => {  //bid-id
  //get data limit 1
  // sort by bidAmount .sort({ bidAmount: -1 }).limit(1)
  // const bidId = req.body.bidId;
  // const topranker = SetBid.findAll({
  //     where: { bidId: bidId },
  //     attributes: [[sequelize.fn('max', sequelize.col('bid')), 'winner']],
  //     include: [
  //         {
  //             model: Item,
  //         }
  //     ],
  //     raw: true,
  // })

  // res.status(201).json({
  //     success: true,
  //     data: topranker
  // })
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ error: 'Product not found' });

    const bids = await Bid.findAll({
      where: { productId: product.id },
      attributes: ['userId', [sequelize.fn('MAX', sequelize.col('amount')), 'maxAmount']],
      group: ['userId'],
      order: [[sequelize.fn('MAX', sequelize.col('amount')), 'DESC']],
      limit: 10,
      include: [{ model: User }]
    });

    res.status(200).json(bids);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

exports.getWinner = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ error: 'Product not found' });

    const winningBid = await Bid.findOne({
      where: { productId: product.id },
      order: [['amount', 'DESC']],
      include: [{ model: User }]
    });

    if (!winningBid)
      return res.status(404).json({ error: 'No winning bid found for this product' });

    const winner = {
      id: winningBid.user.id,
      email: winningBid.user.email,
      amount: winningBid.amount
    };

    res.status(200).json(winner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}