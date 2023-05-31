const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/iTi')
    .then(() => console.log('Connected!'));


const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true, minlength: 3, maxlength: 15 },
    age: {
        type: Number,
        min: 13,
        validate: {
            validator: function(value) {
                return value % 2 === 0; // age must be an even number
            },
            message: props => `${props.value} is not an even number`
        }
    }
});

const todoSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, minlength: 5, maxlength: 20, index: true },
    status: { type: String, default: 'to-do' },
    tags: { type: [String], maxlength: 10 },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Todo = mongoose.model('Todo', todoSchema);

module.exports = { User, Todo };





User.create({ name: "sss", age: 22 }).then(data => console.log(data))