'use strict';

const request = require('supertest');
const express = require('express');
const { assert } = require('chai');

const routes = require('../src/routes/productRating.route')

const app = express();
app.use(routes)

describe('API tests', () => {

    describe('GET /rating/{productId}', () => {
        it('should return Aggregate Rating and array of Individual Rating for a given product', (done) => {
            request(app)
                .get('/rating/1')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect((response) => {
                    assert.isObject(response.body.data.aggrRating);
                    assert.isArray(response.body.data.individualRatings);
                    assert.hasAllKeys(response.body.data.aggrRating, ["avgRating", "numberRating"])
                    assert.isObject(response.body.data.individualRatings[0])
                    assert.hasAllKeys(response.body.data.individualRatings[0], ["name", "rating"])
                })
                .end(done);
        })
    })
});