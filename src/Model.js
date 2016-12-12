let models = require('./index').models;


let save = function () {
    let props = this.__properties__;
};

let update = function () {
    let props = this.__properties__;
};

let destroy = function () {
    let props = this.__properties__;
};

module.exports.Column = (metadata) => {
    return (target, property, descriptor) => {
        // target.__name__ = target.constructor;
        if (models.indexOf(target.constructor) < 0) {
            target.constructor.__properties__ = [];
            models.push(target.constructor);
        }
        target.constructor.__properties__.push({property, ...metadata});
    }
}

module.exports.Model = (value) => {
    return (target, property, descriptor) => {
        target.__name__ = value;
        let model = models.find(model => {
            return model == target
        });
        if(model == null) {
            model = target;
            models.push(model);
        }
        model.save = save;
        model.destroy = destroy;
        model.update = update;
    }
}

