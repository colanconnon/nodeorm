let expect = require("chai").expect;
let User = require("./Models/ModelExample");
let Todo = require("./Models/Model2example");
let TodoItem = require('./Models/Model3example');
let orm = require('../src');

describe('Test that model decorators work', () => {

    it('should add a model to the internal model fields', () => {
        expect(orm.models).to.include(User);

    });

    it('should contain the correct data after setup', () => {
        expect(orm.models).to.include(User);

        let user = new User();
        expect(user.save).to.not.be.undefined;
        expect(user.destroy).to.not.be.undefined;
        expect(user.update).to.not.be.undefined;
        expect(user.find).to.be.undefined;
        expect(user.findOne).to.be.undefined;
        expect(user).to.have.property('__properties__');
        expect(user).to.have.property('__name__');

    });

    it('should be undefined calling an instance method when its not an instance', () => {
        expect(User.save).to.be.undefined;
        expect(User.destroy).to.be.undefined;
        expect(User.update).to.be.undefined;
        expect(User.findOne).to.not.be.undefined;
        expect(User.find).to.not.be.undefined;
        expect(User).to.not.have.property('__properties__');
    });

    it('should save a models properties to the database', () => {

        let user = new User();

        user.save();

        expect(user.id).to.exist;
        
    });


    it('should create the tables in the database', () => {
            
    });


});