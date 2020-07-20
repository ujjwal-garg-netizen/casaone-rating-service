/**
 * Funtion to fetch Aggregate Ratings for a given Product 
 * @param {integer} productId : Id of the given product
 * @returns {any} AggregateRating Object
 */

async function getAggregateRating(productId) {
    //Assuming rating is being fetched from DB
    return ({ avgRating: 4.5, numberRating: 400 })
}

/**
 * Funtion to fetch Ratings for a given Product segmented in Page as per Page Size 
 * @param {integer} productId : Id of the given product
 * @param {integer} page : a given page
 * @param {integer} pageSize : number of dersired records per page 
 * @returns {any} Array of Rating Object
 */

async function getIndividualRatings(productId, page, pageSize) {
    //Assuming individual rating is being fetch from db
    let ratings = [{ name: "Ujjwal", rating: 4.5 }, { name: "Swati", rating: 4.9 }, { name: "Kishan", rating: 4.2 }]
    return (ratings)
}

module.exports = {
    getAggregateRating, getIndividualRatings
}