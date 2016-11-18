//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon')
var mocks = require('./../mocks/mocks.json');
require('./../src/array-linq');


var people = mocks.people;
var messageList = [];


describe('array extension methods each(obj, idx)', () => {

  it('should executes callback(x, i) for each element of array', () => {
    var printFnStb = sinon.spy();

    people.each(printFnStb);

    expect(printFnStb.callCount).to.equal(5);
    expect(printFnStb.calledWith({ name: "pedro", age: 19 })).to.be.true;
    expect(printFnStb.calledWith({ name: "juan", age: 15 })).to.be.true;
    expect(printFnStb.calledWith({ name: "pablo", age: 16 })).to.be.true;
    expect(printFnStb.calledWith({ name: "pancho", age: 20 })).to.be.true;
    expect(printFnStb.calledWith({ name: "topo", age: 18 })).to.be.true;
    sinon.restore();
  });
});