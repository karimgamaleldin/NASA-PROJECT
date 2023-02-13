const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');
const cluster = require('cluster');
const {loadPlanetsData} = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL = "mongodb+srv://nasa-api:DjDiMEnjzTLNYThC@nasacluster.8tksmqk.mongodb.net/?retryWrites=true&w=majority";

const server = http.createServer(app);

mongoose.connection.once('open' , () => {
    console.log('MongoDb connection is ready!')
}); // event handlers that handles events when an event happen

mongoose.connection.on('error' , (err) => {
    console.log(err);
});

async function startServer(){
    // const params = {
    //     useNewUrlParser : true, // to parse the connection striing not needed on new mongose
    //     //useFindAndModify : false , //  disables the old way to update data not needed on new mongose
    //     //useCreateIndex : true , // use the new create index function not needed on new mongose
    //     useUnifiedTopology: true // use updated ways to talk to clusters not needed on new mongose
    // } // no longer needed in new vwesion of mongoose
    await mongoose.connect(MONGO_URL); // the {} to avoid using depricated functions
    await loadPlanetsData();
    server.listen(PORT , ()=> {

    }) 
}
startServer();
