//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');

var children = [

    { name: 'ana', sex: 'f' },
    { name: 'fosto', sex: 'm' },
    { name: 'jane', sex: 'f' },
    { name: 'yadi', sex: 'f' },
    { name: 'lili', sex: 'f' },
    { name: 'bany', sex: 'm' },
    { name: 'rod', sex: null },
    { name: 'auro', sex: 'f' },
    { name: 'martin', sex: 'm' }
],
    messageList = [];


describe('array extension methods count', function () {
    afterEach(function () {
        kid = null;
    });

    it('should count(spec) return array lenght if no specification added', function () {
        var childrenNumber = children
            .count();
        
        console.log(childrenNumber);
        expect(childrenNumber).to.equal(9);
    });

    it('should count(spec) return the number of elements that accomplish the specification added', function () {       
         var childrenNumber = children
            .count(child => child.sex === 'f');
        
        console.log(childrenNumber);
        expect(childrenNumber).to.equal(5);
    });
});