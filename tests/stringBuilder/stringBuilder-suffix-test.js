var chai = require('chai');
var expect = chai.expect;
var StringBuilder = require('./../../src/stringBuilder');

var sb = StringBuilder;
var count = 0;

describe('StringBuilder method suffix', () => {
    afterEach(() => {
        sb.clear();
    });

    it('should add a suffix to every concatenation added', () => {
        
        expect(sb.suffix('-').rep(5, ' hello').string()).to.equal(' hello- hello- hello- hello- hello-');        
    });

    it('should add a suffix and execute functions', () => {
        
        expect(sb.suffix('= ', () => count += 1, ' ' ).rep(2, 'hello ').string()).to.equal('hello = 1 hello = 2 ');        
    });
});