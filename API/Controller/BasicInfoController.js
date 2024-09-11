const mongoose = require('mongoose');
const BasicInfo = require('../Models/BasicInfo');

const basicDetails = async (req, res) => {
    try {
        console.log(req.body);
        const obj = req.body;
        const data = new BasicInfo(obj);
        await data.save();

        res.status(200).send({status:"Basic Details created successfully", data})

    } catch (error) {
        console.log("Error", error);
        res.status(500).send({status:"Basic Details not created", message: error})
        
    }
}

module.exports = {basicDetails}