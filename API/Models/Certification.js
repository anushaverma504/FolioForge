const mongoose = require('mongoose');

const CertificationSchema = mongoose.Schema({
    userID:{type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
    title: {type:"String", required:"true"},
    affilatedCompany: {type:"String", required:"true"},
    description: {type:"String"},
    createdAt: { type: Date, default : new Date()}
});

const Certification = mongoose.model('Certification',CertificationSchema);

module.exports = Certification;