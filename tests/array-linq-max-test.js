//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var people = [
    { name: 'pedro', age: 10 },
    { name: 'juan', age: 12 },
    { name: 'pablo', age: 22 },
    { name: 'pancho', age: 20 },
    { name: 'topo', age: 12 }
];

describe('array extension methods max', function () {


    it('should return the max of all array elements', function () {
        var max = [1, 3, 5, 7, 9, 11]
            .max();

        expect(max).to.equal(11);
    });

    it('should return the sum of all array elements applyin the spec', function () {
        var longestName = people
            .max((p1, p2) => p1.name.length - p2.name.length);

        expect(longestName.name).to.equal('pancho');
    });

    it('should return the sum of all array elements applyin the spec', function () {
        var older = people
            .max((p1, p2) => p1.age - p2.age);

        expect(older.name).to.equal('pablo');
    });

});