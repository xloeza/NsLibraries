//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var mocks = require('./../mocks/mocks.json');

var people = mocks.people;

describe('array extension methods max(spec)', () => {


    it('should return the max of all array elements', () => {

        expect([1, 3, 5, 7, 9, 11].max()).to.equal(11);
    });

    it('should return the max of all array elements applyin the lenght specification', () => {

        expect(people.max((p1, p2) => p1.name.length - p2.name.length).name).to.equal('pancho');
    });

    it('should return the max of all array elements applyin the older specification', () => {

        expect(people.max((p1, p2) => p1.age - p2.age).name).to.equal('pancho');
    });
});