# Casaone Product Rating Service

The goal is to have API to fetch ratings for the product. This should also return average product rating and count for individual ratings

## Setup

1. Clone `https://github.com/ujjwal-garg-netizen/casaone-rating-service.git` 
2. Ensure `node (>8.6 and <= 10)` and `npm` are installed
3. Run `npm install`
4. Run `npm test`
5. Run `npm start`
6. Hit the server to test health `curl localhost:3000/health` and expect a `200` response 

## Tooling

Configured the following tools and connected them to `npm run test`
1. `eslint` - for linting using airbnb-base
2. `nyc` - for code coverage
3. `mocha` - for testing
3. `pre-push` - for git pre push hook running tests
4. `winston` - for logging

## API Developement

Developed API for product rating, available at http://localhost:3000/rating/{productId} with optional "page" and "pageSize" as query parameters