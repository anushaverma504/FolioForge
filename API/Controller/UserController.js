const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Signup = async (req,res) => {
    try {
        let obj = req.body;
        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(obj.password, saltRounds);
        obj = { ...obj, password: hashedPassword };
        console.log("Hashed Password: ", hashedPassword);

        console.log(obj)
        const data = new User(obj);
        await data.save();    
        
        const token = jwt.sign({data}, 'secret key');    

        res.status(200).send({status: "User Signedup/Created successfully", data, token})
    } catch (error) {
        console.log("Error: ",error);
        res.status(502).send(error)
    }
}

const Login = async (req,res) => {
    try {
        const {email,password} = req.body;
        const data = await User.findOne({email});
        console.log("data -> ",data);
        
        if (!data) {
            res.status(400).send({status: "Error", message: "User not exist"}); 
        } else {
        const match = await bcrypt.compare(password, data.password);
            console.log("match -> ",match);
            
        if(match) {
            const token = jwt.sign({data}, 'secret key');         
                res.status(200).send({status:"User Loggedin successfully", data, token});          
        } else{
            res.status(400).send({status: "Error", message: "Invalid Credentials"}); 
        }
    }
    } catch (error) {
        console.log("Error: ",error);
        res.status(502).send(error)
    }
}

module.exports = {Signup, Login}