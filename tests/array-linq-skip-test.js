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


describe('array extension methods skip(howMany)', function () {
    afterEach(function () {
        messageList = [];
    });

    it('should return  a new array without the first howmany elements', function () {

        expect(children.skip(3)).to.eql([{ name: 'yadi', sex: 'f' }, { name: 'lili', sex: 'f' }, { name: 'bany', sex: 'm' }, { name: 'rod', sex: null }, { name: 'auro', sex: 'f' }, { name: 'martin', sex: 'm' }]);
    });

    it('should skip(howmany) return  a new array without the first howmany elements with all the list when zero skiped', function () {

        expect(children.skip(0)).to.eql([{ name: 'ana', sex: 'f' }, { name: 'fosto', sex: 'm' }, { name: 'jane', sex: 'f' }, { name: 'yadi', sex: 'f' }, { name: 'lili', sex: 'f' }, { name: 'bany', sex: 'm' }, { name: 'rod', sex: null }, { name: 'auro', sex: 'f' }, { name: 'martin', sex: 'm' }]);
    });

    it('should return  a new empty arraywhen howmany bigger than array length', function () {

        expect(children.skip(10).length).to.equal(0);
    });
});