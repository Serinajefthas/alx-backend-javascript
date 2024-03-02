/**
 * Look into how to support async testing, for example when waiting for the answer of an API or from a Promise
 * @param {boolean} success - whether successful (or not)
 * @returns {promise} - promise with object
 */
function getPaymentTokenFromAPI(success) {
   return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      resolve();
    }
   });
}
module.exports = getPaymentTokenFromAPI;
