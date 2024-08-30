const mongoose = require('mongoose');

const EducationSchema = mongoose.Schema({
    userID:{type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
    university: {type:"String", require:"true"},
    course: {type:"String", require:"true"},
    city: {type:"String", require:"true"},
    monthOfJoining: {type:"String", require:"true"},
    yearOfJoining: {type:"String", require:"true"},
    monthOfLeaving: {type:"String"},
    yearOfLeaving: {type:"String"},
    marks: {type:"String"},
    marksType: {type:"String"}
});

const Education = mongoose.model('Education',EducationSchema);

module.exports = Education;