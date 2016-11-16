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


describe('array extension methods index(spec)', function () {


    it('should return index based on specification added', function () {

        expect(children.index(child => child.name === 'bany')).to.equal(5);
    });

    it('should return -1 if no match specification', function () {

        expect(children.index(child => child.name === 'mark')).to.equal(-1);
    });

    it('should return the index for any kind of array', function () {

        expect([1, 3, 5, 7, 9, 11].index(7)).to.equal(3);
    });
});