const mongoose = require('mongoose'); 


var userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    fullName:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
    },
});


const User = mongoose.model('User', userSchema);
module.exports = User;