//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');

var people = [
  { name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
  { name: 'juan', age: 23, skills: ['PHP', 'Drink tea'] },
  { name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
];

describe('array extension method any(spec)', function () {

  it('should return true when contains filter', function () {

    expect(people.any(person => person.age == 23)).to.be.true;
    expect(people.any(person => person.age > 23)).to.be.true;
    expect(people.any(person => person.name.length > 3)).to.be.true;
    expect(["One", "Two", "Three"].any("Three")).to.be.true;

  });

  it('should return false when not contains filter', function () {
    expect(people.any(person => person.age == 15)).to.be.false;
    expect(people.any(person => person.age < 23)).to.be.false;
    expect(people.any(person => person.name.length > 10)).to.be.false;
    expect(["One", "Two", "Three"].any("Four")).to.be.false;

  });

  it('should return true when inner any contains filter', function () {
    expect(people.any(person => person.skills.any('C#'))).to.be.true;
    expect(people.any(person => person.skills.any(skill => skill.length > 2))).to.be.true;
  });

  it('should return true when inner any not contains filter', function () {
    expect(people.any(person => person.skills.any('Java'))).to.be.false;
    expect(people.any(person => person.skills.any(skill => skill.length > 10))).to.be.false;
  });
});
