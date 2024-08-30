const mongoose = require('mongoose');

const SkillSchema = mongoose.Schema({
    userID:{type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
    technology: {type:"String", require:"true"},
    level: {type:"String"}
});

const Skill = mongoose.model('Skill',SkillSchema);

module.exports = Skill;