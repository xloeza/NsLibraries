//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var mocks = require('./../mocks/mocks.json');

var developers = mocks.developers;

describe('array extension method any(spec)', () => {

    it('should return true when contains filter', () => {
        expect(developers.any(person => person.age == 23)).to.be.true;
        expect(developers.any(person => person.age > 23)).to.be.true;
        expect(developers.any(person => person.name.length > 3)).to.be.true;
        expect(["One", "Two", "Three"].any("Three")).to.be.true;

    });

    it('should return false when not contains filter', () => {
        expect(developers.any(person => person.age == 15)).to.be.false;
        expect(developers.any(person => person.age < 23)).to.be.false;
        expect(developers.any(person => person.name.length > 10)).to.be.false;
        expect(["One", "Two", "Three"].any("Four")).to.be.false;

    });

    it('should return true when inner any contains filter', () => {
        expect(developers.any(person => person.skills.any('C#'))).to.be.true;
        expect(developers.any(person => person.skills.any(skill => skill.length > 2))).to.be.true;
    });

    it('should return true when inner any not contains filter', () => {
        expect(developers.any(person => person.skills.any('Java'))).to.be.false;
        expect(developers.any(person => person.skills.any(skill => skill.length > 10))).to.be.false;
    });
});
