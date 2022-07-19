const { createBid } = require('../events/listeners/bid-listener');
const {SetBid, Winner} = require('../models');
const {sequelize} = require('sequelize');

exports.create = async (req, res, next) => {
    const data = req.body;
    data.user = req.user;

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

    createBid(data);
    res.status(201).json({
        success: true,
        data: data
    })
}

//get data
exports.getBid = async (req, res, next) => {
    // const bidId = req.body.bidId
    //const bidData = Bid.findAll({ where:{bidId:bidId}})
    // res.status(201).json({message: "All data", data: bidData})
}

//Winner data
exports.getTopBidder = async (req, res, next) => {  //bid-id
    //get data limit 1
    // sort by bidAmount .sort({ bidAmount: -1 }).limit(1)
    const bidId = req.body.bidId;
    const topranker = Bid.findAll({
        where:{bidId:bidId},
        attributes:[[sequelize.fn('max', sequelize.col('bid')),'winner']],
        include : [
            {
              model : Item,
            }
        ],
        raw: true,
    })

    res.status(201).json({
        success: true,
        data: topranker
    })
}