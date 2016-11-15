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


describe('array extension methods first', function () {
    afterEach(function () {
        kid = null;
    });

    it('should first(spec) return first element in array when no spec defined', function () {
        var kid = children
            .first();

        expect(kid.name).to.equal('ana');
    });

    it('should first(spec) return first element in array that accomplish specification', function () {
        var kid = children
            .first(child => child.sex === 'm');

        expect(kid.name).to.equal('fosto');
    });

    it('should first(spec) return null as first element in an empty array', function () {
        var kid = []
            .first(child => child.sex === 'm');

        expect(kid).to.equal(null);
    });

    it('should first(spec) return null as first element in an empty array if no match specification', function () {
        var kid = children
            .first(child => child.sex === 'u');

        expect(kid).to.equal(null);
    });

});