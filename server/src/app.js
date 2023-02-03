const express = require("express");
const planetsRouter = require('./routes/planets/planets.router');
const cors = require('cors');

const whitelist = {
    origin: 'http://localhost:3000'
}
const app = express();
app.use(cors(whitelist)); // if left emtpy it will accept all
app.use(express.json());
app.use(planetsRouter);

module.exports = app;