/**
 * Sum of two rounded numbers
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number} sum a and b, both rounded nearest integer
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
