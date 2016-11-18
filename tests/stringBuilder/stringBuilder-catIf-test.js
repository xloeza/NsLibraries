var chai = require('chai');
var expect = chai.expect;
var StringBuilder = require('./../../src/stringBuilder');

var sb = StringBuilder


describe('StringBuilder method catIf', () => {
    
    afterEach(() => {
        sb.clear();
    });

    it('should add an string howManyTimes specified', () => {
        var sex = 'f' 
        expect(sb.catIf(sex === 'f', 'Hola World' ).bufferSize()).to.equal(1);
    });

     it('should add an string howManyTimes specified', () => {
        var sex = 'm' 
        expect(sb.catIf(sex === 'f', 'Hola World' ).bufferSize()).to.equal(0);
    });
});