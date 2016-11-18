//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var mocks = require('./../mocks/mocks.json');

var people = mocks.people;

describe('array extension methods sum', () => {


    it('should return the summatory of all array elements', () => {

        expect([1, 3, 5, 7, 9, 11].sum()).to.equal(36);
    });

    it('should return the summatory of all array elements applying the specification', () => {

        expect([1, 3, 5, 7, 9, 11].sum(x => x * 2)).to.equal(72);
    });

    it('should return the sum of all array elements applyin the spec', () => {

        expect(people.sum(person => person.age)).to.equal(88);
    });

    it('should return the concatenation of all array elements', () => {

        expect(['[1]', '[2]', '[3]'].sum()).to.equal('[1][2][3]');
    });
});