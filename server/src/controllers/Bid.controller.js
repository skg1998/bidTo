const { createBid } = require('../events/listeners/bid-listener');

exports.create = async (req, res, next) => {
    const data = req.body;
    data.user = req.user;
    //store data to data-base
    //redis.set('new-bid-{product-id}$${user-id}$${timestamp}', '')

    //hmset('user:1235', 'user_id', 1235, 'user_name', jake, 'user_age', 21);

    createBid(data);
    res.status(201).json({
        success: true,
        data: data
    })
}