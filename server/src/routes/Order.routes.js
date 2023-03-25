const express = require('express');
const router = express.Router();
const { createOrder, getAllOrder, orderById } = require('../controllers/order.controller');

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: Order Management
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Order]
 *     requestBody:
 *       description: Information about the order
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *                 description: ID of the product being ordered
 *               userId:
 *                 type: integer
 *                 description: ID of the user placing the order
 *               quantity:
 *                 type: integer
 *                 description: Quantity of the product being ordered
 *               totalPrice:
 *                 type: number
 *                 format: float
 *                 minimum: 0
 *                 description: Total price of the order
 *     responses:
 *       201:
 *         description: Successful response with the newly created order
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the newly created order
 *                 productId:
 *                   type: integer
 *                   description: ID of the product being ordered
 *                 userId:
 *                   type: integer
 *                   description: ID of the user placing the order
 *                 quantity:
 *                   type: integer
 *                   description: Quantity of the product being ordered
 *                 totalPrice:
 *                   type: number
 *                   format: float
 *                   minimum: 0
 *                   description: Total price of the order
 *       400:
 *         description: Bad request - missing or invalid request body
 *       404:
 *         description: Product or user not found
 *       500:
 *         description: Internal server error
 */
router.post('/', createOrder);

/**
 * @swagger
 * /orders/{orderId}:
 *   get:
 *     summary: Get a specific order by ID
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the order to get
 *     responses:
 *       200:
 *         description: The requested order
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 */
router.get('user/:id', orderById)

/**
 * @swagger
 * /orders/user/{userId}:
 *   get:
 *     summary: Get all orders for a specific user
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user to get orders for
 *     responses:
 *       200:
 *         description: The requested orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       404:
 *         description: User not found
 */
router.get('user/:userId', getAllOrder);


module.exports = router;
