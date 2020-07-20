const logger = require('../utils/logger.util')
const ProductRatingService = require('../services/productRating.service')

/**
 * Controller to fetch Aggregate Rating and Individual Rating 
 * for a given Product to be segmented in Pages 
 * as per number of record per Page
 * @param {integer} productId : Id of the given product
 * @param {integer} page (Optional) : a given page
 * @param {integer} pageSize (Optional) : number of dersired records per page
 * @returns {any} AggregateRating Object and Array of Rating Object
 */

module.exports = async function (req, res, next) {
    try {
        let productId = req.params.productId
        let page = req.query.page
        let pageSize = req.query.pageSize

        if (!page || !pageSize || isNaN(page) || isNaN(pageSize)) {
            //Setting default value
            page = 1
            pageSize = 20
        }

        let aggrRating = await ProductRatingService.getAggregateRating(productId)
        let individualRatings = await ProductRatingService.getIndividualRatings(productId, page, pageSize)

        res.status(200).send({ success: true, data: { aggrRating, individualRatings } })

    } catch (err) {
        logger.error(err)
        next(err)
    }
}