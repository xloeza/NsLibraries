//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var mocks = require('./../mocks/mocks.json');

var children = mocks.children;


describe('array extension methods pluck(prop)', () => {

    it('should return an array with the property defined', () => {

        expect(children.pluck('name')).to.eql(['ana', 'fosto', 'jane', 'yadi', 'lili', 'bany', 'rod', 'auro', 'martin']);
        expect(children.pluck('sex')).to.eql(['f', 'm', 'f', 'f', 'f', 'm', null, 'f', 'm']);
    });
});