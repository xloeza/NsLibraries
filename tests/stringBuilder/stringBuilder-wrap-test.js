var chai = require('chai');
var expect = chai.expect;
var StringBuilder = require('./../../src/stringBuilder');

var sb = StringBuilder;
var count = 0;

describe('StringBuilder method wrap', () => {
    afterEach(() => {
        sb.clear();
    });

    it('should add a prefix and suffix to every concatenation added', () => {
        
        expect(sb.wrap('<', '>').rep(5, 'hello').string()).to.equal('<hello><hello><hello><hello><hello>');
    });

    it('should add a prefix and suffix and execute functions', () => {
        
        expect(sb.wrap(['[', () => count += 1], ']').rep(5, '.-hello').string()).to.equal('[1.-hello][2.-hello][3.-hello][4.-hello][5.-hello]');
    });
});