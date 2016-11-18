var chai = require('chai');
var expect = chai.expect;
var StringBuilder = require('./../../src/stringBuilder');

var sb = StringBuilder


describe('StringBuilder method cat', () => {
    afterEach(() => {
        sb.clear();
    });

    it('should add an string', () => {

        expect(sb.cat('Hola World').len()).to.equal(1)
    });

    it('should add an Array of strings', () => {

        expect(sb.cat(['this ', 'is ', 'a ', 'test']).len()).to.equal(4)
    });

    it('should add an Array of objects', () => {

        expect(sb.cat('Hello ', 'this ', 'is ', ['another ', 'test']).len()).to.equal(5)
    });

    it('should be able of chain another cat', () => {

        expect(sb.cat('Hello ').cat('this ').cat('is ', ['another', 'test']).len()).to.equal(5)
    });

    it('should be able of add the result of a function', () => {

        expect(sb.cat('Hello ', () => 'World').len()).to.equal(5)
    });

});