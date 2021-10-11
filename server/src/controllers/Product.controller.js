const { Product } = require('../models');

/**
 * 
 * @desc create product 
 * @route POST api/v1/product
 * @access Public
 */
exports.create = async (req, res, next) => {
    try {
        res.status(201).json({
            status: 'success'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc get all product 
 * @route GET api/v1/product
 * @access Public
 */
exports.getAllProducts = async (req, res, next) => {
    try {
        res.status(201).json({
            status: 'success'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc get product by id
 * @route GET api/v1/product/:id
 * @access Public
 */
exports.getProductById = async (req, res, next) => {
    try {
        res.status(201).json({
            status: 'success'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc update product by id
 * @route PUT api/v1/product/:id
 * @access Public
 */
exports.updateProductById = async (req, res, next) => {
    try {
        res.status(201).json({
            status: 'success'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc delete product by id
 * @route DELETE api/v1/product/:id
 * @access Public
 */
exports.deleteProductById = async (req, res, next) => {
    try {
        res.status(201).json({
            status: 'success'
        })
    } catch (err) {
        next(err);
    }
}