/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable prefer-destructuring */
const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses calculateNumber method of Utils', () => {
    const calculateNumberSpy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.calculateNumber.callCount).to.be.equal(1);
    calculateNumberSpy.calculateNumber.restore();
  });
});
