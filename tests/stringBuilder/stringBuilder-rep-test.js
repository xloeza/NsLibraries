var chai = require('chai');
var expect = chai.expect;
var StringBuilder = require('./../../src/stringBuilder');

var sb = StringBuilder


describe('StringBuilder method rep', () => {
    afterEach(() => {
        sb.clear();
    });

    it('should add an string howManyTimes specified', () => {

        expect(sb.rep(10, 'Hola World' ).bufferSize()).to.equal(10);
    });
});