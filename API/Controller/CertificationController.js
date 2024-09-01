const mongoose = require('mongoose');
const Certification = require('../Models/Certification');

const certificationDetails = async (req, res) => {
    try {
        const obj = req.body;
        const data = new Certification(obj);
        await data.save();

        res.status(200).send({status:"Certification Details created successfully", data});

    } catch (error) {
        console.log("Error", error);
        res.status(500).send({status:"Certification Details not created", message: error});

    }
}

module.exports = certificationDetails