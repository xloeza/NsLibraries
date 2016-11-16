//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');

var people = [
  { name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
  { name: 'juan', age: 23, skills: ['PHP', 'Drink tea'] },
  { name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
],
  messageList = [],
  logPerson = (x, i) => {
    var message = (i + 1) + '.- ' + x.name + ' is ' + x.age + ' years old';
    messageList.push(message);
  };

describe('array extension method where(spec)', function () {

  it('should return filtered list with specification elements', function () {

    expect(people.where(dev => dev.skills.where(skill => skill === 'PHP').length === 0)).to.eql([
      { name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
      { name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
    ]);

    expect(people.where(dev => dev.age < 25)).to.eql([
      { name: 'juan', age: 23, skills: ['PHP', 'Drink tea'] }
    ]);

    it('should return empty list if there is values in specification', function () {

      expect(people.where(dev => dev.age < 15).length).to.be.equal(0);
    });
  });
});
