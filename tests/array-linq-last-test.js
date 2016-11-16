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


describe('array extension methods last(spec)', function () {

    it('should return last element in array when no spec defined', function () {

        expect(children.last().name).to.equal('martin');
    });

    it('should return last element in array that accomplish specification', function () {

        expect(children.last(child => child.sex === 'f').name).to.equal('auro');
    });

    it('should last(spec) return null as last element in an empty array', function () {

        expect([].last(child => child.sex === 'm')).to.equal(null);
    });

    it('should last(spec) return null as last element in an empty array if no match specification', function () {

        expect(children.last(child => child.sex === 'u')).to.equal(null);
    });

});