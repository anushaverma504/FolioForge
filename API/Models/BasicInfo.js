const mongoose = require('mongoose');

const BasicInfoSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    firstname: { type: String, required: true },
    middlename: { type: String },
    lastname: { type: String },
    contactno: { type: String, required: true },
    place: { type: String, required: true },
    linkedin: { type: String },
    github: { type: String },
    portfolio: { type: String },
    resume: { type: String },
    about: { type: String },
    profileImage: {type: String},
    createdAt: { type: Date, default : new Date()}
});

const BasicInfo = mongoose.model('BasicInfo',BasicInfoSchema);

module.exports = BasicInfo