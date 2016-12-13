let Model = require('./Model').Model;
let Column = require('./Model').Column;
let models = [];


/**
 *  For each of the models, create the tables, if they don't exist
 *  if they exist then drop the columns that aren't needed, and add the ones that are.
 */
const createDatabaseSchema = () => {
    models.forEach((model) => {
        
    });
};


/**
 * 
 * @param {string} the name of the table to see if exists
 * 
 * @returns {boolean} True if the table exists, false if it doesn't
 */
const checkIfTableExists = (tableName) => {

};

/**
 * Takes in the current columns and the model that is going to sync to the database, 
 * and returns which ones to drop, and which to add
 * 
 * @param {array} currentColumns the current Columns in the database
 * @param {object} model The model that needs to sync with the database
 * @return {object} An object that contains rowsToDelete, and rowsToAdd
 */
const compareToExisitingTable = () => {

};


/**
 *  takes in a table name column name and options to add a table to the database
 * 
 * @param {string} tableName the table name that the column will be added to in the database
 * @param {string} columnName the column name to add to the database
 * @param {string} dataType the data type of the column in the database
 * @param {Object} options an object of all the options to add to the column in the database, ex. null: True
 * 
 * @return {boolean} returns true if it succedded, false otherwise
 */
const addColumn = (tableName, columnName, dataType, options) => {
    
};

/**
 *  Drops a column from the database
 * 
 * Takes in the table name and column name to drop from the database 
 * 
 * @param {string} tableName
 * @param {string} columnName
 */
const dropColumn = (tableName, columnName) => {

};

/**
 *  Sync all the currently detected models to the database, it will create the tables if needed,
 *  It also checks if the table already exists, and if it does it will drop the columns not detected on the model
 *  and then it will add the columns that are detected on the model
 */
const syncModelsSchema = () => {
    

}

const sync = (metadata) => {
    setupModelMetaData();
}


module.exports = {
    models: models,
    run: run,
    Column: Column,
    Model: Model
};