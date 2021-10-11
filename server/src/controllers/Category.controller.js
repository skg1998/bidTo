const { Category } = require('../models');

/**
 * 
 * @desc create category 
 * @route POST api/v1/category
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
 * @desc get all category 
 * @route GET api/v1/category
 * @access Public
 */
exports.getAllCategories = async (req, res, next) => {
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
 * @desc get category by id
 * @route GET api/v1/category/:id
 * @access Public
 */
exports.getCategoryById = async (req, res, next) => {
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
 * @desc update category by id
 * @route PUT api/v1/category/:id
 * @access Public
 */
exports.updateCategoryById = async (req, res, next) => {
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
 * @desc delete category by id
 * @route DELETE api/v1/category/:id
 * @access Public
 */
exports.deleteCategoryById = async (req, res, next) => {
    try {
        res.status(201).json({
            status: 'success'
        })
    } catch (err) {
        next(err);
    }
}