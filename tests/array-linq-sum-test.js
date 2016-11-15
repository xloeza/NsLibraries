//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var people = [
    { name: 'pedro', age: 10 },
    { name: 'juan', age: 12 },
    { name: 'pablo', age: 11 },
    { name: 'pancho', age: 20 },
    { name: 'topo', age: 12 }
];

describe('array extension methods sum', function () {


    it('should return the sum of all array elements', function () {
        var sum = [1, 3, 5, 7, 9, 11]
            .sum();

        expect(sum).to.equal(36);
    });

    it('should return the sum of all array elements applyin the spec', function () {
        var sum = [1, 3, 5, 7, 9, 11]
            .sum(x => x * 2);

        expect(sum).to.equal(72);
    });

    it('should return the sum of all array elements applyin the spec', function () {
        var sum = people
            .sum(person => person.age);

        expect(sum).to.equal(65);
    });

    it('should return the sum of all array elements applyin the spec', function () {
        var sum = ['[1]', '[2]', '[3]']
            .sum();

        expect(sum).to.equal('[1][2][3]');
    });


});