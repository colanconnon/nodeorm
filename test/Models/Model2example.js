let Column = require('../../src/Model').Column;
let Model = require('../../src/Model').Model;

@Model("Todo")
class Todo {

    @Column({columnName:"id", fieldType: "int", primaryKey: true})
    id;

    @Column({columnName: "Todo", fieldType: "String"})
    todo;
}

module.exports = Todo;