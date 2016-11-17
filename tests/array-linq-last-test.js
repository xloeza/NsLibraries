//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var mocks = require('./../mocks/mocks.json');

var children = mocks.children;


describe('array extension methods last(spec)', () => {

    it('should return last element in array when no spec defined', () => {

        expect(children.last().name).to.equal('martin');
    });

    it('should return last element in array that accomplish specification', () => {

        expect(children.last(child => child.sex === 'f').name).to.equal('auro');
    });

    it('should last(spec) return null as last element in an empty array', () => {

        expect([].last(child => child.sex === 'm')).to.equal(null);
    });

    it('should last(spec) return null as last element in an empty array if no match specification', () => {

        expect(children.last(child => child.sex === 'u')).to.equal(null);
    });

});