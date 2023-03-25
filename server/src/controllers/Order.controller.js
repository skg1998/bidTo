const { Order, Product, User } = require('../models');

exports.createOrder = async (req, res) => {
    const { productId, userId, quantity, totalPrice } = req.body;
    try {
        // Check if the product exists
        const product = await Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        // Check if the user exists
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Create a new order
        const order = await Order.create({
            productId,
            userId,
            quantity,
            totalPrice,
        });
        return res.status(201).json(order);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAllOrder = async (req, res, next) => {
    try {
        const orders = await Order.findAll({
            where: { userId },
            order: [['id', 'DESC']],
        });

        if (!orders) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.status(201).json(orders);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

exports.orderById = async (req, res, next) => {
    try {
        const order = await Order.findByPk(req.body.orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.status(201).json(order);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
