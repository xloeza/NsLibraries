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


describe('array extension methods count(spec)', function () {    

    it('should return 9 when no specification added', function () {       

        expect(children.count()).to.equal(9);
    });

    it('should return 5 with female specification', function () {

        expect(children.count(child => child.sex === 'f')).to.equal(5);
    });
});