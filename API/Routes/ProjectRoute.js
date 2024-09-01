const express = require('express');
const { projectDetails } = require('../Controller/ProjectController');

const projectRoute = express.Router();

projectRoute.post('/projectDetails',projectDetails);

module.exports = projectRoute;