require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const fileUpload = require('express-fileupload');

const db = require('./models');
const errorHandler = require('./middleware/error');

//Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const SwaggerOptions = require('../swagger.json');
const swaggerDocument = swaggerJsDoc(SwaggerOptions);

// Routes File
const IndexRoutes = require('./routes/index.routes');
const ProductRoutes = require('./routes/Product.routes');

let app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

//all API
app.use('/', IndexRoutes);
app.use('/api/v1/product', ProductRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

module.exports = app;


