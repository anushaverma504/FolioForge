const express = require('express');
const { skillDetails } = require('../Controller/SkillController');

const skillRoute = express.Router();

skillRoute.post('/skillDetails',skillDetails);

module.exports = skillRoute;