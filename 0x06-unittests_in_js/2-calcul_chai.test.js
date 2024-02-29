/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const expect = chai.expect;

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
      expect(calculateNumber('SUM', 1.49, 2.51)).to.equal(4);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the difference of two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 2.3)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 10.7, 2.8)).to.equal(8);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the division of two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
      expect(calculateNumber('DIVIDE', 7, 2)).to.equal(3.5);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 7, 0)).to.equal('Error');
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error for invalid operation types', () => {
      expect(() => calculateNumber('INVALID', 5, 2)).to.throw(Error);
    });
  });
});

