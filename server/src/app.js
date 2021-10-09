require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const db = require('./models');
const errorHandler = require('./middleware/error');

//Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const SwaggerOptions = require('../swagger.json');
const swaggerDocument = swaggerJsDoc(SwaggerOptions);

// Routes File
const IndexRoutes = require('./routes/index.routes');
const UserRoutes = require('./routes/User.routes');

let app = express();

//creates the table if it doesn't exist (and does nothing if it already exists)
db.sequelize.sync();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

//all API
app.use('/', IndexRoutes);
app.use('/api/v1/users', UserRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

//mysql connection
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

module.exports = app;


