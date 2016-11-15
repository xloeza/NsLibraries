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


describe('array extension methods skip', function () {
    afterEach(function () {
        messageList = [];
    });

    it('should skip(howmany) return  a new array without the first howmany elements', function () {
        children
            .skip(3)
            .each(x => messageList.push(x));

        expect(messageList.length).to.equal(6);
        expect(messageList[0].name).to.equal('yadi');
        expect(messageList[1].name).to.equal('lili');
        expect(messageList[2].name).to.equal('bany');
        expect(messageList[3].name).to.equal('rod');
        expect(messageList[4].name).to.equal('auro');
        expect(messageList[5].name).to.equal('martin');
    });

    it('should skip(howmany) return  a new array without the first howmany elements with all the list when zero skiped', function () {
        children
            .skip(0)
            .each(x => messageList.push(x));

        expect(messageList.length).to.equal(9);
        expect(messageList[0].name).to.equal('ana');
        expect(messageList[1].name).to.equal('fosto');
        expect(messageList[2].name).to.equal('jane');
        expect(messageList[3].name).to.equal('yadi');
        expect(messageList[4].name).to.equal('lili');
        expect(messageList[5].name).to.equal('bany');
        expect(messageList[6].name).to.equal('rod');
        expect(messageList[7].name).to.equal('auro');
        expect(messageList[8].name).to.equal('martin');
    });

    it('should skip(howmany) return  a new array without the first howmany elements with emptylist when howmany bigger than array length', function () {
        children
            .skip(10)
            .each(x => messageList.push(x));

        expect(messageList.length).to.equal(0);
    });
});