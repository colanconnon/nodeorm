let models = require('./index').models;


let save = function() {
    let props = this.__properties__;
};

let update = function () {
    let props = this.__properties__;
};

let destroy = function () {
    let props = this.__properties__;
};

let find = function() {

}

let findOne = function() {

}

module.exports.Column = (metadata) => {
    return (target, property, descriptor) => {
        // target.__name__ = target.constructor;
        if (models.indexOf(target.constructor) < 0) {
            target.constructor.prototype.__properties__ = [];
            models.push(target.constructor);
        }
        target.constructor.prototype.__properties__.push({property, ...metadata});
    }
}

module.exports.Model = (value) => {
    return (target, property, descriptor) => {
        target.prototype.__name__ = value;
        let model = models.find(model => {
            return model == target
        });
        if(model == null) {
            model = target;
            models.push(model);
        }
        model.prototype.save = save;
        model.prototype.destroy = destroy;
        model.prototype.update = update;
        model.find = find;
        model.findOne = findOne;
    }
}

