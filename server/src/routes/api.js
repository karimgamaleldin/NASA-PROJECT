
const express = require('express');

const planetsRouter = require('./planets/planets.router');
const launchesrouter = require('./launches/launches.router');

const api = express.Router();

api.use('/planets',planetsRouter);
api.use('/launches', launchesrouter);

module.exports = api;