const mongoose = require('mongoose');
const Project = require('../Models/Project');

const projectDetails = async (req, res) => {
    try {
        let obj = req.body;

        obj = {...obj, projectImage: req.file.path}
        
        const data = new Project(obj);
        await data.save();

        res.status(200).send({status:"Project Details created successfully", data})

    } catch (error) {
        console.log("Error", error);
        res.status(500).send({status:"Project Details not created", message: error})
        
    }
}

module.exports = {projectDetails}