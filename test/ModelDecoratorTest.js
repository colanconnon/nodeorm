let expect = require("chai").expect;
let User = require("./Models/ModelExample");
let Todo = require("./Models/Model2example");
let TodoItem = require('./Models/Model3example');
let internalModels = require('../src/').models;
let run = require('../src/').run;

describe('Test that model decorators work', () => {

    it('should add a model to the internal model fields', () => {
        expect(internalModels).to.include(User);

    });

    it('should contain the correct data after setup', () => {
        run();
        expect(internalModels).to.include(User);
        expect(User).to.haveOwnProperty('__properties__');
        expect(Todo).to.haveOwnProperty('__name__');
        User.save();
        User.destroy();
        User.update();

    });

});