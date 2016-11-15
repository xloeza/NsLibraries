//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');


describe('array extension methods flatten', function () {

    it('should return the flattened array with all elements', function () {
        var flattened = [1, 2, 3, [4, 5, [6, 7, 8], 9, 10, 11, 12, 13, 14], 15, 16]
            .flatten();

        expect(flattened).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    });

});