//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var mocks = require('./../mocks/mocks.json');

var people = mocks.people;

describe('array extension methods min(spec)', () => {

    it('should return the minimum of all array elements', () => {

        expect([10, 3, 5, 1, 7, 9, 11].min()).to.equal(1);
    });

    it('should return the minimum of all array elements applyin the lenght specification', () => {

        expect(people.min((p1, p2) => p1.name.length - p2.name.length).name).to.equal('juan');
    });

    it('should return the minimum of all array elements applyin the oldest specification', () => {

        expect(people.min((p1, p2) => p1.age - p2.age).name).to.equal('juan');
    });
});