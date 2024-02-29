/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    assert.strictEqual(calculateNumber(1.4, 2.1), 3);
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    assert.strictEqual(calculateNumber(-1.2, 2.6), 2);
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(1.49999, 2.499999), 3);
    assert.equal(calculateNumber(-0.4, -0.6), -1);
    assert.equal(calculateNumber(-0.49, -0.51), -1);
  });
});
