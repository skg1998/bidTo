const express = require('express');
const router = express.Router();
const {
    create,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    getAvailableSlot,
    getMyAllProducts
} = require('../controllers/Product.controller');
const uploadfile = require('../middleware/uploadFile');

const { hasAuthenticate } = require('../middleware/hasAuth');

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
 *    security:
 *      - bearerAuth: []
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
router.post('/', hasAuthenticate, uploadfile.single("image"), create);

/**
 * @swagger
 * /product/getmyproducts:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Product]
 *     description: Retrive My All product
 *     responses:
 *       200:
 *         description: Successfully retrive my all the product
 */
router.get('/getmyproducts', hasAuthenticate, getMyAllProducts);

/**
* @swagger
* /product/{id}:
*   get:
*     security:
*       - bearerAuth: []
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
 * /product/slot/:date:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Product]
 *     description: Retrive a available slot by date
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Retrive available slot from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: Successfully retrive available slot
 */
router.get('/slot/:date', getAvailableSlot);

/**
 * @swagger
 * /product/{id}:
 *   put:
 *     security:
 *       - bearerAuth: []
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
 *     security:
 *       - bearerAuth: []
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
