const mongoose = require('mongoose');

const EducationSchema = mongoose.Schema({
    userID:{type: mongoose.Schema.Types.ObjectId, ref:'users', requiredd: true},
    university: {type:"String", required:"true"},
    course: {type:"String", required:"true"},
    city: {type:"String", required:"true"},
    monthOfJoining: {type:"String", required:"true"},
    yearOfJoining: {type:"String", required:"true"},
    monthOfLeaving: {type:"String"},
    yearOfLeaving: {type:"String"},
    marks: {type:"String"},
    marksType: { type: String , enum: ['CGPA','%'], default: '%'},
    createdAt: { type: Date, default : new Date()}
});

const Education = mongoose.model('Education',EducationSchema);

module.exports = Education;