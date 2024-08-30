const mongoose = require('mongoose');

const ExperienceSchema = mongoose.Schema({
    userID:{type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
    company: {type:"String", require:"true"},
    place: {type:"String", require:"true"},
    designation: {type:"String", require:"true"},
    monthOfJoining: {type:"String", require:"true"},
    yearOfJoining: {type:"String", require:"true"},
    monthOfLeaving: {type:"String"},
    yearOfLeaving: {type:"String"},
    jobDescription: {type:"String"}
});

const Experience = mongoose.model('Experience',ExperienceSchema);

module.exports = Experience;