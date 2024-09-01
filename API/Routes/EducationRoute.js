const express = require('express');
const { educationDetails } = require('../Controller/EducationController');

const educationRoute = express.Router();

educationRoute.post('/educationDetails',educationDetails);

module.exports = educationRoute;