const express = require('express');
const { projectDetails } = require('../Controller/ProjectController');
const imgUpload = require('../Middleware/ProjectImageUpload');

const projectRoute = express.Router();

projectRoute.post('/projectDetails',imgUpload,projectDetails);

module.exports = projectRoute;