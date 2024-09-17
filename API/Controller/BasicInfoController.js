const mongoose = require('mongoose');
const BasicInfo = require('../Models/BasicInfo');

const basicDetails = async (req, res) => {
    try {
        let obj = req.body;
        console.log(obj);
        obj = {...obj, profileImage: req.file.path}        
        const data = new BasicInfo(obj);
        await data.save();

        res.status(200).send({status:"Basic Details created successfully", data})

    } catch (error) {
        console.log("Error", error);
        res.status(500).send({status:"Basic Details not created", message: error})
        
    }
}

module.exports = {basicDetails}