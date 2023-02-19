const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://nasa-api:DjDiMEnjzTLNYThC@nasacluster.8tksmqk.mongodb.net/?retryWrites=true&w=majority";



mongoose.connection.once('open' , () => {
    console.log('MongoDb connection is ready!')
}); // event handlers that handles events when an event happen

mongoose.connection.on('error' , (err) => {
    console.log(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL); // the {} to avoid using depricated functions

}

async function mongoDisconnect() {
    await mongoose.disconnect();
}
module.exports = {
    mongoConnect,
    mongoDisconnect,
}

