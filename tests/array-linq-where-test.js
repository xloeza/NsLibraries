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

describe('array extension method where', function () {

  it('should where method filter list to return two elements', function () {

    var notPhpDevs = people.where(dev => {
      var skills = dev.skills.where(skill => skill === 'PHP');
      return skills.length === 0;
    }
    );

    expect(notPhpDevs.length).to.equal(2);
  });

  it('should where method be linked with each and print filtered list', function () {
    people.where(function (dev) {
      var skills = dev.skills.where(function (skill) { return skill === 'PHP'; });
      return skills.length === 0;
    })
      .each(logPerson);

    expect(messageList.length).to.equal(2);
    expect(messageList[0]).to.equal('1.- pedro is 29 years old');
    expect(messageList[1]).to.equal('2.- pablo is 26 years old');
  });

});
