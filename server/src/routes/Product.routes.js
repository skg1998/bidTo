const express = require('express');
const router = express.Router();
const {
    create,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
} = require('../controllers/Product.controller');

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Product Management
 */

/**
 * @swagger
 * /product:
 *  post:
 *    tags: [Product]
 *    description: Create a product
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Create product
 *        description: Create a product.
 *        schema:
 *          type: object
 *          required:
 *            - id
 *            - name
 *            - desc
 *            - price
 *            - image
 *            - Category
 *            - session_id
 *          properties:
 *            id:
 *              type: integer
 *            name:
 *              type: string
 *            desc:
 *              type: string
 *            price:
 *              type: integer
 *            image:
 *              type: string
 *            Category:
 *              type: integer
 *            session_id:
 *              type: integer
 *    responses:
 *      '200':
 *        description: Successfully Create a Category.
 */
router.post('/', create);

/**
 * @swagger
 * /product:
 *   get:
 *     tags: [Product]
 *     description: Retrive All product
 *     responses:
 *       200:
 *         description: Successfully retrive all the product
 */
router.get('/', getAllProducts);

/**
 * @swagger
 * /product/{id}:
 *   get:
 *     tags: [Product]
 *     description: Retrive a single product
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Retrive product from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: Successfully retrive single product
 */
router.get('/:id', getProductById);

/**
 * @swagger
 * /product/{id}:
 *   put:
 *     tags: [Product]
 *     description: Update a single product
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Update product from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: Successfully update single product
 */
router.put('/:id', updateProductById);

/**
 * @swagger
 * /product/{id}:
 *   delete:
 *     tags: [Product]
 *     description: Delete a single product
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Delete product from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: Successfully delete single product
 */
router.delete('/:id', deleteProductById);

module.exports = router;
