const mongoose = require('mongoose');

const BasicInfoSchema = mongoose.Schema({
    userID:{type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
    // email: {type:"String", require:"true", unique},
    firstname: {type:"String", require:"true"},
    middlename: {type:"String", require:"true"},
    lastname: {type:"String", require:"true"},
    contactno: {type:"String", require:"true"},
    place: {type:"String", require:"true"},
    linkedin: {type:"String"},
    github: {type:"String"},
    portfolio: {type:"String"},
    resume: {type:"String"},
    about: {type:"String"}
});

const BasicInfo = mongoose.model('BasicInfo',BasicInfoSchema);