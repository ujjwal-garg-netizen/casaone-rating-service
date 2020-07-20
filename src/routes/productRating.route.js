
const express = require('express');
const router = express.Router();

const productRatingController = require('../controllers/productRating');

/**
 * @swagger
 *  components:
 *    responses:
 *      InternalServerError:
 *        type: object
 *        properties:
 *          error_code:
 *            type: string
 *          message:
 *            type: string
 *      BadRequest:
 *        type: object
 *        properties:
 *          error_code:
 *            type: string
 *          message:
 *            type: string
 */


/**
 * @swagger
 *  paths:
 *    /rating/{productId}:
 *      get:
 *        summary: Get product aggregate rating and individual ratings segmented in pages
 *        description: Return aggregateRating Object and array of individualRating Object
 *        parameters:
 *          - name: productId
 *            description: Id of the product
 *            in: path
 *            type: integer
 *            required: true
 *          - name: page
 *            description: Page number
 *            in: query
 *            type: integer
 *            required: false
 *          - name: pageSize
 *            description: Number of individual ratings per page
 *            in: query
 *            type: integer
 *            required: false
 *        responses:
 *          '200':
 *            description: aggregateRating object and array of individualRating object
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    aggrRating: 
 *                      type: object
 *                      properties:
 *                        avgRating:
 *                          type: number
 *                        numberRating:
 *                          type: number
 *                    individualRatings:
 *                      type: array   
 *                      items: 
 *                        type: object
 *                        properties:
 *                          name: 
 *                            type: string
 *                          rating:
 *                            type: number
 *          '400':
 *            description: Bad Request
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/responses/BadRequest'
 *          '404':
 *            description: Not Found
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    error_code:
 *                      type: string
 *                    message:
 *                      type: string
 *          '500':
 *            description: Internal Server Error
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/responses/InternalServerError'
 */


router.get('/rating/:productId', productRatingController);

module.exports = router