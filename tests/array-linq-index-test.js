//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var mocks = require('./../mocks/mocks.json');

var children = mocks.children;


describe('array extension methods index(spec)', () => {


    it('should return index based on specification added', () => {

        expect(children.index(child => child.name === 'bany')).to.equal(5);
    });

    it('should return -1 if no match specification', () => {

        expect(children.index(child => child.name === 'mark')).to.equal(-1);
    });

    it('should return the index for any kind of array', () => {

        expect([1, 3, 5, 7, 9, 11].index(7)).to.equal(3);
    });
});