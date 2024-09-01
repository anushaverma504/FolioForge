const mongoose = require('mongoose');

const SkillSchema = mongoose.Schema({
    userID:{type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
    technology: {type:"String", required:"true"},
    level: {type:"String"},
    createdAt: { type: Date, default : new Date()}
});

const Skill = mongoose.model('Skill',SkillSchema);

module.exports = Skill;