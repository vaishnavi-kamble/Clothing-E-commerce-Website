const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const LoginModel = mongoose.model("loginusers",LoginSchema);
module.exports = LoginModel;