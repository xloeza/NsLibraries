var chai = require('chai');
var expect = chai.expect;
var StringBuilder = require('./../../src/stringBuilder');

var sb = StringBuilder


describe('StringBuilder method string', () => {
    afterEach(() => {
        sb.clear();
    });
    
    it('should return the buffer concatenated', () => {
        
        expect(sb.cat('Hello ', 'World', ' !!!').string()).to.equal('Hello World !!!');
    });
});