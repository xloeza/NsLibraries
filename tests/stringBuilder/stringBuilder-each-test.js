var chai = require('chai');
var expect = chai.expect;
var StringBuilder = require('./../../src/stringBuilder');
var mocks = require('./../../mocks/mocks.json');
var developers = mocks.developers;


var sb = StringBuilder;
var count = 0;


var funcTest2 = function(dev){
    this.cat('[', dev.name, ']');
};

describe('StringBuilder method each', () => {
    afterEach(() => {
        sb.clear();
    });

    it('should iterate over array', () => {
    
        expect(sb.each(developers, funcTest2 ).string()).to.equal('[pedro][juan][pablo]');        
    });

});