let Column = require('../../src/Model').Column;
let Model = require('../../src/Model').Model;

@Model("User")
class User {

    @Column({columnName:"id", fieldType: "int", primaryKey: true})
    id;

    @Column({columnName: "username", fieldType: "String"})
    user;

    @Column({columnName: "password", fieldType: "String"})
    password;   
}

module.exports = User;