//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');

var people = [
  { name: 'pedro', age: 19 },
  { name: 'juan', age: 15 },
  { name: 'pablo', age: 16 },
  { name: 'pancho', age: 20 },
  { name: 'topo', age: 18 }
],
  messageList = [];


describe('array extension methods each', function () {

  it('should executes callback(x, i) for each element of array', function () {
    people.each((x, i) => {
      var message = (i + 1) + '.- ' + x.name + ' is ' + x.age + ' years old';
      messageList.push(message);
      console.log(message);
    });

    expect(messageList.length).to.equal(5);
    expect(messageList[0]).to.equal('1.- pedro is 19 years old');
    expect(messageList[1]).to.equal('2.- juan is 15 years old');
    expect(messageList[2]).to.equal('3.- pablo is 16 years old');
    expect(messageList[3]).to.equal('4.- pancho is 20 years old');
    expect(messageList[4]).to.equal('5.- topo is 18 years old');

  });
});