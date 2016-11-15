//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var people = [
    { name: 'pedro', age: 10 },
    { name: 'juan', age: 12 },
    { name: 'pablo', age: 22 },
    { name: 'pancho', age: 20 },
    { name: 'top', age: 12 }
];

describe('array extension methods min', function () {


    it('should return the minimum of all array elements', function () {
        var min = [10, 3, 5, 1, 7, 9, 11]
            .min();

        console.log(min);
        expect(min).to.equal(1);
    });

    it('should return the sum of all array elements applyin the spec', function () {
        var shortestName = people
            .min((p1, p2) => p1.name.length - p2.name.length);

        console.log(shortestName);
        expect(shortestName.name).to.equal('top');
    });

    it('should return the sum of all array elements applyin the spec', function () {
        var jounger = people
            .min((p1, p2) => p1.age - p2.age);

        console.log(jounger);
        expect(jounger.name).to.equal('pedro');
    });

});