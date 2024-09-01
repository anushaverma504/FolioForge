const mongoose = require('mongoose');
const Skill = require('../Models/Skill');

const skillDetails = async (req, res) => {
    try {
        const obj = req.body;
        const data = new Skill(obj);
        await data.save();

        res.status(200).send({status:"Skill Details created successfully", data})

    } catch (error) {
        console.log("Error", error);
        res.status(500).send({status:"Skill Details not created", message: error})
        
    }
}

module.exports = {skillDetails}