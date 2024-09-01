const express = require('express');
const certificationDetails = require('../Controller/CertificationController');

const certificationRoute = express.Router();

certificationRoute.post('/certificationDetails',certificationDetails);

module.exports = certificationRoute