
const express = require('express');
const router = express.Router();

const productRatingController = require('../controllers/productRating');

router.get('/rating/:productId', productRatingController);

module.exports = router