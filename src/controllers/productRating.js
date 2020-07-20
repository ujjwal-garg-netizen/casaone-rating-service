const logger = require('../utils/logger.util');
const ProductRatingService = require('../services/productRating.service');

/**
 * Controller to fetch Aggregate Rating and Individual Rating
 * for a given Product to be segmented in Pages
 * as per number of record per Page
 * @param {integer} productId : Id of the given product
 * @param {integer} page (Optional) : a given page
 * @param {integer} pageSize (Optional) : number of dersired records per page
 * @returns {any} AggregateRating Object and Array of Rating Object
 */

module.exports = async function controller(req, res, next) {
  try {
    const { productId } = req.params;
    let { page } = req.query;
    let { pageSize } = req.query;

    if (!page || !pageSize || Number(page) || Number(pageSize)) {
      // Setting default value
      page = 1;
      pageSize = 20;
    }

    const aggrRating = await ProductRatingService.getAggregateRating(productId);
    const indRating = await ProductRatingService.getIndividualRatings(productId, page, pageSize);

    res.status(200).send({ success: true, data: { aggrRating, individualRatings: indRating } });
  } catch (err) {
    logger.error(err);
    next(err);
  }
};
