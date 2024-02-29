/**
 * calculates sum/subtract/divide of two rounded numbers
 * @param {string} type - the type of calculation
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number|string} result or Error if dividing by 0
 */
function calculateNumber(type, a, b) {
  switch(type) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      if (Math.round(b) == 0)
        return 'Error'
      return Math.round(a) / Math.round(b);
    default:
      throw new Error('Invalid operation type');

module.exports = calculateNumber;
