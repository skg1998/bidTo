const express = require('express');
const router = express.Router();
const {
    create,
    getAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
} = require('../controllers/Category.controller');
const uploadfile = require('../middleware/uploadFile');

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Category Management
 */

/**
 * @swagger
 * /category:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags: [Category]
 *    description: Create a Category
 *    consumes:
 *      - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Create Category
 *        description: Create a Category.
 *        schema:
 *          type: object
 *          required:
 *            - id
 *            - name
 *            - desc
 *          properties:
 *            id:
 *              type: integer
 *            name:
 *              type: string
 *            desc:
 *              type: string
 *    responses:
 *      '200':
 *        description: Successfully Create a Category.
 */
router.post('/', uploadfile.single("image"), create);

/**
 * @swagger
 * /category:
 *   get:
 *     tags: [Category]
 *     description: Retrive All Category
 *     responses:
 *       200:
 *         description: Successfully retrive all the category
 */
router.get('/', getAllCategories);

/**
 * @swagger
 * /category/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Category]
 *     description: Retrive a single category
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Retrive Category from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: Successfully retrive single category
 */
router.get('/:id', getCategoryById);

/**
 * @swagger
 * /category/{id}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags: [Category]
 *     description: Update a single category
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Update Category from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: Successfully update single category
 */
router.put('/:id', updateCategoryById);

/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags: [Category]
 *     description: Delete a single category
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Delete Category from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: Successfully delete single category
 */
router.delete('/:id', deleteCategoryById);

module.exports = router;
