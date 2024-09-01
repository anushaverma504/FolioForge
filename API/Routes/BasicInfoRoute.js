const express = require('express');
const { basicDetails } = require('../Controller/BasicInfoController');

const basicInfoRoute = express.Router();

basicInfoRoute.post('/basicDetails',basicDetails);

module.exports = basicInfoRoute;