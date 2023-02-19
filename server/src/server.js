const http = require('http');

require('dotenv').config();


const app = require('./app');
const {mongoConnect} = require("../src/services/mongo");
const cluster = require('cluster');
const {loadPlanetsData} = require('./models/planets.model');
const {loadLaunchData} = require('./models/launches.model');

const PORT = process.env.PORT || 8000;


const server = http.createServer(app);


async function startServer(){
    // const params = {
    //     useNewUrlParser : true, // to parse the connection striing not needed on new mongose
    //     //useFindAndModify : false , //  disables the old way to update data not needed on new mongose
    //     //useCreateIndex : true , // use the new create index function not needed on new mongose
    //     useUnifiedTopology: true // use updated ways to talk to clusters not needed on new mongose
    // } // no longer needed in new vwesion of mongoose
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();
    server.listen(PORT , ()=> {

    }) 
}
startServer();
