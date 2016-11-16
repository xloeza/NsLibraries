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


describe('array extension methods select(spec)', function () {

  it('should executes spec(x) for each element of array', function () {

    expect(people.select(dev => { return { name: dev.name } })).to.eql([{ name: 'pedro' }, { name: 'juan' }, { name: 'pablo' }, { name: 'pancho' }, { name: 'topo' }]);
  });
});