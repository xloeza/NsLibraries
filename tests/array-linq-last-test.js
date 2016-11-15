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


describe('array extension methods last', function () {
    afterEach(function () {
        kid = null;
    });

    it('should last(spec) return last element in array when no spec defined', function () {
        var kid = children
            .last();
        
        console.log(kid.name);
        expect(kid.name).to.equal('martin');
    });

    it('should last(spec) return last element in array that accomplish specification', function () {
        var kid = children
            .last(child => child.sex === 'f');
        
        console.log(kid.name);
        expect(kid.name).to.equal('auro');
    });

    it('should last(spec) return null as last element in an empty array', function () {
        var kid = []
            .last(child => child.sex === 'm');
        
        expect(kid).to.equal(null);
    });

    it('should last(spec) return null as last element in an empty array if no match specification', function () {
        var kid = children
            .last(child => child.sex === 'u');
        
        expect(kid).to.equal(null);
    });

});