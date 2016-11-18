var chai = require('chai');
var expect = chai.expect;
var StringBuilder = require('./../../src/stringBuilder');

var sb = StringBuilder;
var count = 0;

describe('StringBuilder method end', () => {
    afterEach(() => {
        sb.clear();
    });

    it('should remove last wrapper configuration', () => {
        console.log(sb.string());
        expect(sb.wrap(['[', () => count += 1], ']').rep(2, '.-hello').end().cat('World').string()).to.equal('[1.-hello][2.-hello]World');
    });

    it('should remove last deep wrappers', () => {
        console.log(sb.string());
        expect(sb.wrap('{', '}').wrap('[', ']').wrap('(', ')').rep(2, 'hello').end(2).cat('World').string()).to.equal('{[(hello)]}{[(hello)]}{World}');
    });
});