let models = [];


const setupModelMetaData = () => {
    models.forEach((model) => {
        console.log(model);
    });
}

const run = (metadata) => {
    setupModelMetaData();
}


module.exports = {
    models: models,
    run: run
};