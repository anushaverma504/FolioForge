const mongoose = require('mongoose');
const Experience = require('../Models/Experience');

const experienceDetails = async (req, res) => {
    try {
        const obj = req.body;
        const data = new Experience(obj);
        await data.save();

        res.status(200).send({status:"Experience Details created successfully", data})

    } catch (error) {
        console.log("Error", error);
        res.status(500).send({status:"Experience Details not created", message: error})
        
    }
}

module.exports = {experienceDetails}