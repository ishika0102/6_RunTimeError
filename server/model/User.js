const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        min : 2,
        max : 255
    },
    email : {
        type: String,
        required: true,
        min : 6,
        max : 255
    },
    password : {
        type : String,
        required : true,
        max : 1024,
        min : 8
    },
    phone_no : {
        type : String,
        required : true,
        max : 10,
        min :10
    },
    location : {
        type : String,
        required : true,
        max : 100,
        min :2
    },
    role : {
        type : String,
        required : true,
    }
});
module.exports = mongoose.model('User',userSchema);
