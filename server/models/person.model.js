const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        minlength:[2, 'First Name must be at least 2 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        minlength:[2, 'Last Name must be at least 2 characters']},
    birthdate:{
        type: Date,
        required:[true, 'Birthday is required']
    },
    email:{
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
        maxlength:[12, "Password must be no longer than 12 characters"]
    }
}, { timestamps:true});
module.exports = mongoose.model('Person',PersonSchema);