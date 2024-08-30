const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    userID:{type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
    name: {type:"String", require:"true"},
    technology: {type:"String", require:"true"},
    description: {type:"String", require:"true"},
    deployedLink: {type:"String"},
    monthOfJoining: {type:"String", require:"true"},
    yearOfJoining: {type:"String", require:"true"},
    monthOfLeaving: {type:"String"},
    yearOfLeaving: {type:"String"}
});

const Project = mongoose.model('Project',ProjectSchema);

module.exports = Project;