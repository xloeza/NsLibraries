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
];


describe('array extension methods take(spec)', function () {

    it('should return  a new array with the first howmany elements', function () {

        expect(children.take(3)).to.eql([{ name: 'ana', sex: 'f' }, { name: 'fosto', sex: 'm' }, { name: 'jane', sex: 'f' }]);
    });

    it('should return  a new array with the first howmany elements filtered by specification', function () {

        expect(children.take(3, child => child.sex === 'f')).to.eql([{ name: 'ana', sex: 'f' }, { name: 'jane', sex: 'f' }, { name: 'yadi', sex: 'f' }]);
    });

});