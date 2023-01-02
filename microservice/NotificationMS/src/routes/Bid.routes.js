const express = require("express");
const { create } = require('../controllers/Bid.controller');
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
 * /bid/create-bid:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags: [Bid]
 *    description: Use to create a Bid account
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Create Account
 *        description: Create Bid Account.
 *        schema:
 *          type: object
 *          required:
 *            - product_id
 *            - username
 *            - bidding-price
 *          properties:
 *            product_id:
 *              type: string
 *            username:
 *              type: string
 *            bidding-price:
 *              type: string
 *    responses:
 *      '200':
 *        description: Create Bid successfully.
 */
router.post('/create-bid', hasAuthenticate, create);

module.exports = router;