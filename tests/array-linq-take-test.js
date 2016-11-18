//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var mocks = require('./../mocks/mocks.json');

var children = mocks.children;


describe('array extension methods take(spec)', () => {

    it('should return  a new array with the first howmany elements', () => {

        expect(children.take(3)).to.eql([{ name: 'ana', sex: 'f' }, { name: 'fosto', sex: 'm' }, { name: 'jane', sex: 'f' }]);
    });

    it('should return  a new array with the first howmany elements filtered by specification', () => {

        expect(children.take(3, child => child.sex === 'f')).to.eql([{ name: 'ana', sex: 'f' }, { name: 'jane', sex: 'f' }, { name: 'yadi', sex: 'f' }]);
    });
});