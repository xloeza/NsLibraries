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
]


describe('array extension methods pluck(prop)', function () {


    it('should return an array with the property defined', function () {
       
        expect(children.pluck('name')).to.eql(['ana', 'fosto', 'jane', 'yadi', 'lili', 'bany', 'rod', 'auro', 'martin']);
        expect(children.pluck('sex')).to.eql(['f', 'm', 'f', 'f', 'f', 'm', null, 'f', 'm']);
    });

});