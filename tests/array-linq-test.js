//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('mocha-sinon');
require('./../src/array-linq');

var people = [ 
    {name: 'pedro', age: 19 },
    {name: 'juan', age: 15 },
    {name: 'pablo', age: 16 },
    {name: 'pancho', age: 20 },
    {name: 'topo', age: 18 }
    ];


describe('array extension methods', function() {
  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });

  it('should executes callback(x, i) for each element of array', function() { 
    people.each(function(x, i){ 
      console.log((i + 1) + '.- ' + x.name + ' is ' + x.age + ' years old');
    });

    expect( console.log.callCount ).to.equal(5);
    expect( console.log.calledWith('1.- pedro is 19 years old') ).to.be.true;
    expect( console.log.calledWith('2.- juan is 15 years old') ).to.be.true;
    expect( console.log.calledWith('3.- pablo is 16 years old') ).to.be.true;
    expect( console.log.calledWith('4.- pancho is 20 years old') ).to.be.true;
    expect( console.log.calledWith('5.- topo is 18 years old') ).to.be.true;    
  });
});