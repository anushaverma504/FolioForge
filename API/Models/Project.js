const mongoose = require('mongoose');


const ProjectSchema = mongoose.Schema({
    userID:{type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
    name: {type:"String", required:"true"},
    technology: {type:"String", required:"true"},
    description: {type:"String", required:"true"},
    deployedLink: {type:"String"},
    dateOfStarting: {type:Date},
    dateOfEnding: {type:Date},
    projectImage: {type:"String"},
    createdAt: {type: Date, default : new Date()}
});

const Project = mongoose.model('Project',ProjectSchema);

module.exports = Project;