const express = require("express");
const { create, getTopBidder, getWinner } = require('../controllers/Bid.controller');
const { hasAuthenticate } = require('../middleware/hasAuth')

const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Bid
 *   description: Bid Management
 */

/**
 * @swagger
 * /bid/products/{id}/bids:
 *   post:
 *     summary: Place a bid on a product
 *     tags: [Bid]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the product to place a bid on
 *       - in: body
 *         name: bid
 *         description: Bid object containing the bid amount
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             amount:
 *               type: number
 *               description: Bid amount
 *               example: 100.00
 *     responses:
 *       201:
 *         description: Bid placed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                 bid:
 *                   type: object
 *                   description: Bid object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID of the bid
 *                     amount:
 *                       type: number
 *                       description: Bid amount
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                       description: Timestamp of when the bid was placed
 *                     productId:
 *                       type: integer
 *                       description: ID of the product the bid was placed on
 *                     userId:
 *                       type: integer
 *                       description: ID of the user who placed the bid
 *       400:
 *         description: Invalid or lower bid amount, or user's new bid is lower than their previous bid
 *       401:
 *         description: Unauthorized access
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */
router.post('/products/:id/bids', hasAuthenticate, create);

/**
 * @swagger
 * /bid/products/{id}/top-bidders:
 *   get:
 *     summary: Get the top bidders for a product
 *     tags: [Bid]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the product to get the top bidders for
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         required: false
 *         default: 10
 *         description: Number of top bidders to retrieve (default is 10)
 *     responses:
 *       200:
 *         description: Successful response with the top bidders' information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productId:
 *                   type: integer
 *                   description: ID of the product
 *                 topBidders:
 *                   type: array
 *                   description: Array of top bidders
 *                   items:
 *                     type: object
 *                     properties:
 *                       userId:
 *                         type: integer
 *                         description: ID of the user
 *                       email:
 *                         type: string
 *                         description: Email of the user
 *                       amount:
 *                         type: number
 *                         description: Amount of the bid
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */
router.get('/products/:id/top-bidders', getTopBidder);

/**
 * @swagger
 * /bid/products/{id}/winner:
 *   get:
 *     summary: Get the winning bidder for a product
 *     tags: [Bid]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the product to get the winning bidder for
 *     responses:
 *       200:
 *         description: Successful response with the winning bidder's information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the winning bidder
 *                 email:
 *                   type: string
 *                   description: Email of the winning bidder
 *                 amount:
 *                   type: number
 *                   description: Amount of the winning bid
 *       404:
 *         description: Product not found or no winning bid found for the product
 *       500:
 *         description: Internal server error
 */
router.get('/products/:id/winner', getWinner);



module.exports = router;