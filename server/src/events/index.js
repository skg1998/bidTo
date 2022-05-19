let redis = require('redis');
let redisAdapter = require('socket.io-redis');
let pub = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST, {});
let sub = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST, {});

const { setSocket } = require('./listeners/bid-listener');

//channel name
sub.subscribe('bid');

const onConnection = (socket) => {
    //socket.on("bid:create", BidCreate);
}

module.exports = function (io) {
    io.adapter(redisAdapter({
        pubClient: pub,
        subClient: sub
    }));
    setSocket(io)
    io.on('connection', onConnection);
}