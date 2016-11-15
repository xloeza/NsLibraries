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


describe('array extension methods select', function () {

  it('should executes spec(x) for each element of array', function () {
    people
      .select(dev => dev.name)
      .each(x => messageList.push(x));

    expect(messageList.length).to.equal(5);
    expect(messageList[0]).to.equal('pedro');
    expect(messageList[1]).to.equal('juan');
    expect(messageList[2]).to.equal('pablo');
    expect(messageList[3]).to.equal('pancho');
    expect(messageList[4]).to.equal('topo');
  });
});