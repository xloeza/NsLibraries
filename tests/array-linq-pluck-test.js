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


describe('array extension methods pluck', function () {


    it('should pluck(spec) return array with the property', function () {
        children
            .pluck('name')
            .each(x => {
                console.log(x);
                messageList.push(x);
            });


        expect(messageList.length).to.equal(9);

    });

});