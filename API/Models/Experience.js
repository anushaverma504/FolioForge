const mongoose = require('mongoose');

const ExperienceSchema = mongoose.Schema({
    userID:{type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
    company: {type:"String", required:"true"},
    place: {type:"String", required:"true"},
    designation: {type:"String", required:"true"},
    monthOfJoining: {type:"String", required:"true"},
    yearOfJoining: {type:"String", required:"true"},
    monthOfLeaving: {type:"String"},
    yearOfLeaving: {type:"String"},
    jobDescription: {type:"String"},
    createdAt: { type: Date, default : new Date()}
});

const Experience = mongoose.model('Experience',ExperienceSchema);

module.exports = Experience;