/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable prefer-destructuring */
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('Should log correct total when total is 100 and shipping 20', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consoleSpy, 'The total is: 120');
    assert(consoleSpy.calledOnce, 'console should be called exactly once');
  });

  it('should log the correct total when amt is 10 and shipping 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(consoleSpy, 'The total is: 20');
    assert(consoleSpy.calledOnce, 'console should be called exactly once');
  });

//  it('should call console.log exactly once', () => {
//    sendPaymentRequestToApi(100, 20);
//    sendPaymentRequestToApi(10, 10);
//    assert(consoleSpy.calledOnce, 'console.log should be called exactly once');
//  });
});
