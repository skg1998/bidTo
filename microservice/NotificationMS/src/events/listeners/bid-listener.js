let socket;
let IO;

class Socket {
    constructor(io) {
        this.io = IO = io;
    }
    getSocket() {
        return this.io;
    }
}

module.exports = {
    setSocket(io) {
        socket = new Socket(io)
    },
    createBid(payload) {
        IO.emit('bid-created', payload);
    }
};


//redis.get('new-bid-{product-id}$$*$$*')
// redis.set('new-bid-{product-id}$${user-id}$${timestamp}', '')
// redis.set('new-bid-{product-id}$${user-id}$${timestamp}', '')
// redis.set('new-bid-{product-id}$${user-id}$${timestamp}', '')
// redis.set('new-bid-{product-id}$${user-id}$${timestamp}', '')
// redis.set('new-bid-{product-id}$${user-id}$${timestamp}', '')
// redis.set('new-bid-{product-id}$${user-id}$${timestamp}', '')
// redis.set('new-bid-{product-id}$${user-id}$${timestamp}', '')
// redis.set('new-bid-{product-id}$${user-id}$${timestamp}', '')