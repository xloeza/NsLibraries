//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');

var people = [ 
    {name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
    {name: 'juan', age: 23, skills: ['PHP', 'Drink tea'] },
    {name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
    ],
    messageList =[],
    logPerson = function(x, i){
      var message = (i + 1) + '.- ' + x.name + ' is ' + x.age + ' years old';
      messageList.push(message);
      console.log(message);
    };

describe('array extension method any', function() {
  afterEach(function() {
    messageList =[];
  });
  

  it('should where method be linked with each and print filtered list using any callback', function() { 
    people.where(function(dev){
                        return !dev.skills.any(function(skill) { return skill == 'PHP' })
                    })
          .each(logPerson);

    expect( messageList.length ).to.equal(2);
    expect( messageList[0] ).to.equal('1.- pedro is 29 years old');
    expect( messageList[1] ).to.equal('2.- pablo is 26 years old');  
  });

  it('should where method be linked with each and print filtered list using any array', function() { 
    people.where(function(dev){
                        return !dev.skills.any('PHP');
                    })
          .each(logPerson);

    expect( messageList.length ).to.equal(2);
    expect( messageList[0] ).to.equal('1.- pedro is 29 years old');
    expect( messageList[1] ).to.equal('2.- pablo is 26 years old');  
  });

});
