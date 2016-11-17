//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var mocks = require('./../mocks/mocks.json');

var children = mocks.children;


describe('array extension methods first(spec)', () => {
    

    it('should return first element in array when no spec defined', () => {

        expect(children.first().name).to.equal('ana');
    });

    it('should return first element in array that accomplish specification', () => {

        expect(children.first(child => child.sex === 'm').name).to.equal('fosto');
    });

    it('should return null as first element in an empty array', () => {

        expect([].first(child => child.sex === 'm')).to.equal(null);
    });

    it('should return null as first element in an empty array if no match specification', () => {

        expect(children.first(child => child.sex === 'u')).to.equal(null);
    });

});