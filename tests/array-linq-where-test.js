//debug: mocha tests --recursive --watch --debug-brk
var chai = require('chai');
var expect = chai.expect;
require('./../src/array-linq');
var mocks = require('./../mocks/mocks.json');

var developers = mocks.developers;

describe('array extension method where(spec)', () => {

    it('should return filtered list with specification elements', () => {

        expect(developers.where(dev => dev.skills.where(skill => skill === 'PHP').length === 0)).to.eql([
            { name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
            { name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
        ]);

        expect(developers.where(dev => dev.age < 25)).to.eql([
            { name: 'juan', age: 23, skills: ['PHP', 'Drink tea'] }
        ]);
    });

    it('should return empty list if there is values in specification', () => {

        expect(developers.where(dev => dev.age < 15).length).to.be.equal(0);
    });
});
