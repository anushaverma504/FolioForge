const mongoose = require('mongoose');
const Education = require('../Models/Education');

const educationDetails = async (req, res) => {
    try {
        const obj = req.body;
        const data = new Education(obj);
        await data.save();

        res.status(200).send({status:"Education Details created successfully", data})

    } catch (error) {
        console.log("Error", error);
        res.status(500).send({status:"Education Details not created", message: error})
        
    }
}

module.exports = {educationDetails}