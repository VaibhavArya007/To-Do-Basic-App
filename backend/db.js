const mongoose = require("mongoose");
// mongodb+srv://vaibhavaryavns007:FRQ8fMdvkkczTvL0@cluster0.dvynsag.mongodb.net/todos

mongoose.connect("your mongoose link here")

const todoSchema= mongoose.Schema({
    title: String,
    desc: String,
    completed: Boolean
})

const todo= mongoose.model ('todos', todoSchema);

module.exports = {
    todo
}
