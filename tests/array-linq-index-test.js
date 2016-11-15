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


describe('array extension methods index', function () {
    afterEach(function () {
        kid = null;
    });

    it('should index(spec) return the zero based position based on specification added', function () {
        var banyIndex = children
            .index(child => child.name === 'bany');

        expect(banyIndex).to.equal(5);
    });

    it('should index(spec) return -1 if no match specification', function () {
        var banyIndex = children
            .index(child => child.name === 'mark');

        expect(banyIndex).to.equal(-1);
    });

    it('should return the index for any kind of array', function () {
        var id = [1, 3, 5, 7, 9, 11]
            .index(7);

        expect(id).to.equal(3);
    });


});