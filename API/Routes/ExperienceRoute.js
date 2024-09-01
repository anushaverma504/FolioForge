const express = require('express');
const { experienceDetails } = require('../Controller/ExperienceController');

const experienceRoute = express.Router();

experienceRoute.post('/experienceDetails',experienceDetails);

module.exports = experienceRoute;