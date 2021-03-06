const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const helmet = require('helmet')

const ratingRoutes = require('./src/routes/productRating.route');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const swaggerDocOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Casaone Product Rating Service',
      version: '1.0.0'
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerDocOptions);
app.use(helmet())
app.get('/health', (req, res) => res.status(200).send('healthy'))
app.use('/', ratingRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send({
    error_code: 'NOT_FOUND_ERROR',
    message: 'Resources you are looking for are Not Found'
  });
});

// error handler
app.use(function (err, req, res, next) {

  res.status(500).send({
    error_code: 'SERVER_ERROR',
    message: 'Unknown error'
  });

});

module.exports = app;
