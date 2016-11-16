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


describe('array extension methods first(spec)', function () {
    

    it('should return first element in array when no spec defined', function () {

        expect(children.first().name).to.equal('ana');
    });

    it('should return first element in array that accomplish specification', function () {

        expect(children.first(child => child.sex === 'm').name).to.equal('fosto');
    });

    it('should return null as first element in an empty array', function () {

        expect([].first(child => child.sex === 'm')).to.equal(null);
    });

    it('should return null as first element in an empty array if no match specification', function () {

        expect(children.first(child => child.sex === 'u')).to.equal(null);
    });

});