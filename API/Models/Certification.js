const mongoose = require('mongoose');

const CertificationSchema = mongoose.Schema({
    userID:{type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
    title: {type:"String", require:"true"},
    affilatedCompany: {type:"String", require:"true"},
    description: {type:"String"}
});

const Certification = mongoose.model('Certification',CertificationSchema);

module.exports = Certification;