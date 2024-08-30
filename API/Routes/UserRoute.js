const express = require('express');
const { Signup, Login } = require('../Controller/UserController');
const validation = require('../Middleware/LoginValidation');

const userRoute = express.Router(); 

userRoute.post('/signup', Signup);
userRoute.post('/login', validation, Login);

module.exports = userRoute;
