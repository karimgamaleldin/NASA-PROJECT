const path = require('path');
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');
const launchesrouter = require('./routes/launches/launches.router');



const whitelist = {
    origin: 'http://localhost:3000'
}
const app = express();
app.use(cors(whitelist)); // if left emtpy it will accept all
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname , '..' , 'public'))); //a middleware that serves all our public files
app.use(planetsRouter);
app.use(launchesrouter);
app.get('/*',(req,res) => {
    res.sendFile(path.join(__dirname , '..' , 'public' , 'index.html' ))
})

module.exports = app;