const { Product, Image } = require('../models');
const ErrorResponse = require('../util/errorResponse');
const Cloudnary = require('../util/cloudnary');

/**
 * 
 * @desc create product 
 * @route POST api/v1/product 
 * @access Public
 */
exports.create = async (req, res, next) => {
    console.log("User", req.user, req.body);

    try {
        if (!req.file) {
            return next(new ErrorResponse('Please upload image', 400))
        }

        const fileUrl = await Cloudnary.uploader.upload(req.file.path);
        const image = await Image.create({ data: fileUrl.secure_url, cloudnaryId: fileUrl.public_id });
        const path = await Image.findByPk(image.id);

        const product = new Product({
            name: req.body.name,
            image: path.data,
            desc: req.body.desc,
            price: req.body.price,
            location: req.body.location,
            category_id: req.body.category,
            startbid: req.body.startBidding,
            endbid: req.body.endBidding,
            adminid: req.user.id
        })

        let newProduct = await product.save();

        res.status(200).json({
            success: true,
            data: newProduct,
            message: 'Add new Product Successfully !'
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
        const result = await Product.findAll();

        res.status(200).json({
            success: true,
            data: result,
            message: 'Get all Product Successfully !'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc get my all product 
 * @route GET api/v1/product
 * @access Public
 */
exports.getMyAllProducts = async (req, res, next) => {
    try {
        const result = await Product.findAll({ where: { adminid: req.user.id } });
        res.status(200).json({
            success: true,
            data: result,
            message: 'Get My all Product Successfully !'
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
        const result = await Product.findByPk(req.params.id)
        if (!result) {
            return next(new ErrorResponse('Given Product id not found', 400))
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
 * @desc update product by id
 * @route PUT api/v1/product/:id
 * @access Public
 */
exports.updateProductById = async (req, res, next) => {
    try {
        let product = await Product.findByPk(req.params.id)
        if (!product) {
            return next(new ErrorResponse('Given product id not found', 400))
        }

        const productImageId = await Image.findOne({ where: { data: product.image } });
        await Cloudnary.uploader.destroy(productImageId.cloudnaryId);

        const fileUrl = await Cloudnary.uploader.upload(req.file.path);
        const image = await Image.create({ data: fileUrl.secure_url, cloudnaryId: fileUrl.public_id });
        const path = await Image.findByPk(image.id);

        const data = {
            name: req.body.name || product.name,
            image: path.data || product.image,
            desc: req.body.desc || product.desc,
            price: req.body.price || product.price,
            category: req.body.category || product.category,
            session_id: req.body.session_id || product.session_id
        }

        product = await Product.update(data, { where: { id: req.params.id } });

        res.status(200).json({
            success: true,
            data: product,
            message: 'Get all categories Successfully !'
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
        let product = await Product.findByPk(req.params.id);

        if (!product) {
            return next(new ErrorResponse('Given product id not found', 400))
        }

        const productImageId = await Image.findOne({ where: { data: product.image } });
        await Cloudnary.uploader.destroy(productImageId.cloudnaryId);
        await product.destroy({ where: { id: req.params.id } });

        res.status(200).json({
            success: true,
            message: 'Delete product Successfully !'
        })
    } catch (err) {
        next(err);
    }
}

/**
 * 
 * @desc get slot by date
 * @route GET api/v1/product/slot/:date
 * @access Public
 */

exports.getAvailableSlot = async (req, res, next) => {

}