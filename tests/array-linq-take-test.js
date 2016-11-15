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


describe('array extension methods take', function () {
    afterEach(function () {
        messageList = [];
    });

    it('should take(howmany, spec) return  a new array with howmany elements', function () {
        children
            .take(3)
            .each(x => {
                console.log(x);
                messageList.push(x);
            });

        expect(messageList.length).to.equal(3);
        expect(messageList[0].name).to.equal('ana');
        expect(messageList[1].name).to.equal('fosto');
        expect(messageList[2].name).to.equal('jane');
    });

    it('should take(howmany, spec) return  a new array with howmany elements filtered by spec', function () {
        children
            .take(3, child => child.sex === 'f')
            .each(x => {
                console.log(x);
                messageList.push(x);
            });

        expect(messageList.length).to.equal(3);
        expect(messageList[0].name).to.equal('ana');
        expect(messageList[1].name).to.equal('jane');
        expect(messageList[2].name).to.equal('yadi');
    });

});