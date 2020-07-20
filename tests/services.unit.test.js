'use strict';

const { assert } = require('chai');

const productRatingService = require('../src/services/productRating.service')

describe('ProductRatingService Unit Tests', () => {

    describe('getAggregateRating', () => {
        it('should return Aggregate Rating for a given product', async () => {

            let response = await productRatingService.getAggregateRating(1)
            assert.isObject(response);
            assert.hasAllKeys(response, ["avgRating", "numberRating"])

        })
    })

    describe('getIndividualRatings', async () => {

        it('should return array of Individual Rating object', async () => {
            let response = await productRatingService.getIndividualRatings(1)
            assert.isArray(response)
            assert.isObject(response[0])
            assert.hasAllKeys(response[0], ["name", "rating"])
        })

    })

});