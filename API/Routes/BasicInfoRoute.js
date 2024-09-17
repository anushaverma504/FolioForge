const express = require('express');
const { basicDetails } = require('../Controller/BasicInfoController');
const profileImgUpload = require('../Middleware/ProjectImageUpload');

const basicInfoRoute = express.Router();

basicInfoRoute.post('/basicDetails',profileImgUpload,basicDetails);

module.exports = basicInfoRoute;