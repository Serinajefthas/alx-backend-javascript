/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of two rounded numbers', () => {
      assert.equal(calculateNumber('SUM', 1.4, 2.6), 4);
      assert.equal(calculateNumber('SUM', -1.49, 2.51), 2);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the difference of two rounded numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', 5.9, 2.3), 4);
      assert.equal(calculateNumber('SUBTRACT', -5.9, -2.3), -4);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the division of two rounded numbers', () => {
      assert.equal(calculateNumber('DIVIDE', 10, 2), 5);
      assert.equal(calculateNumber('DIVIDE', -7, -2), 3.5);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return "Error" when dividing by zero', () => {
      assert.equal(calculateNumber('DIVIDE', 10, 0), 'Error');
      assert.equal(calculateNumber('DIVIDE', 7.6, 0.4), 'Error');
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error for invalid operation types', () => {
      assert.throws(() => calculateNumber('INVALID', 5, 2), Error);
    });
  });
});
