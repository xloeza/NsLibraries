var chai = require('chai');
var expect = chai.expect;
var StringBuilder = require('./../../src/stringBuilder');

var sb = StringBuilder;
var count = 0;

describe('StringBuilder method prefix', () => {
    afterEach(() => {
        sb.clear();
    });

    it('should add a prefix to every concatenation added', () => {
        
        expect(sb.prefix('-').rep(5, 'hello ').string()).to.equal('-hello -hello -hello -hello -hello ');        
    });

    it('should add a prefix and suffix and execute functions', () => {
        
        expect(sb.prefix(() => count += 1, '.-').rep(2, 'hello ').string()).to.equal('1.-hello 2.-hello ');
        console.log(sb.string());
    });
});