//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var mocks = require('./../mocks/mocks.json');

var children = mocks.children;

describe('array extension methods count(spec)', () => {    

    it('should return 9 when no specification added', () => {       

        expect(children.count()).to.equal(9);
    });

    it('should return 5 with female specification', () => {

        expect(children.count(child => child.sex === 'f')).to.equal(5);
    });
});