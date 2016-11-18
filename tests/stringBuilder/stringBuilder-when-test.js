var chai = require('chai');
var expect = chai.expect;
var StringBuilder = require('./../../src/stringBuilder');
var mocks = require('./../../mocks/mocks.json');
var developers = mocks.developers;


var sb = StringBuilder;
var count = 0;


var funcConcat = function (dev) {
    this.when(dev.age <= 23, ['[', dev.name, ' is joung],'], ['[', dev.name, ' is old]'])
};

describe('StringBuilder method when', () => {
    afterEach(() => {
        sb.clear();
    });

    it('should concate depending on the evalueation thenArgs or otherwiseArgs', () => {

        expect(sb.each(developers, funcConcat).string()).to.equal('[pedro is old][juan is joung],[pablo is old]');
    });

});