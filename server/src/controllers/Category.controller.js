const { Category, Image } = require('../models');
const ErrorResponse = require('../util/errorResponse');
const Cloudnary = require('../util/cloudnary');

/**
 * 
 * @desc create category  
 * @route POST api/v1/category
 * @access Public
 */
exports.create = async (req, res, next) => {
    try {
        if (!req.file) {
            return next(new ErrorResponse('Please upload image', 400))
        }

        const fileUrl = await Cloudnary.uploader.upload(req.file.path);
        const image = await Image.create({ data: fileUrl.secure_url, cloudnaryId: fileUrl.public_id });
        const path = await Image.findByPk(image.id);
        const category = new Category({
            name: req.body.name,
            image: path.data,
            desc: req.body.desc
        })

        let newCategory = await category.save();
        res.status(200).json({
            success: true,
            data: newCategory,
            message: 'Add new category Successfully !'
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
        const result = await Category.findAll();

        res.status(200).json({
            success: true,
            data: result,
            message: 'Get all categories Successfully !'
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
        const result = await Category.findByPk(req.params.id)
        if (!result) {
            return next(new ErrorResponse('Given category id not found', 400))
        }
        res.status(200).json({
            success: true,
            data: result,
            message: 'Get all categories Successfully !'
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
        let category = await Category.findByPk(req.params.id)
        if (!category) {
            return next(new ErrorResponse('Given category id not found', 400))
        }

        const categoryImageId = await Image.findOne({ where: { data: category.image } });
        await Cloudnary.uploader.destroy(categoryImageId.cloudnaryId);

        const fileUrl = await Cloudnary.uploader.upload(req.file.path);
        const image = await Image.create({ data: fileUrl.secure_url, cloudnaryId: fileUrl.public_id });
        const path = await Image.findByPk(image.id);
        const data = {
            name: req.body.name || category.name,
            image: path.data || category.image
        }

        category = await Category.update(data, { where: { id: req.params.id } });

        res.status(200).json({
            success: true,
            data: category,
            message: 'Get all categories Successfully !'
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
        let category = await Category.findByPk(req.params.id);

        if (!category) {
            return next(new ErrorResponse('Given category id not found', 400))
        }

        const categoryImageId = await Image.findOne({ where: { data: category.image } });
        await Cloudnary.uploader.destroy(categoryImageId.cloudnaryId);
        await Category.destroy({ where: { id: req.params.id } });

        res.status(200).json({
            success: true,
            message: 'Delete category Successfully !'
        })
    } catch (err) {
        next(err);
    }
}