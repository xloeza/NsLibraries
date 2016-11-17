//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var mocks = require('./../mocks/mocks.json');

var people = mocks.people;


describe('array extension methods select(spec)', () => {

  it('should executes spec(x) for each element of array', () => {

    expect(people.select(dev => { return { name: dev.name } })).to.eql([{ name: 'pedro' }, { name: 'juan' }, { name: 'pablo' }, { name: 'pancho' }, { name: 'topo' }]);
  });
});