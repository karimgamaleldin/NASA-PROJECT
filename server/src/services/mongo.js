const mongoose = require("mongoose");

require('dotenv').config();

const MONGO_URL =process.env.MONGO_URL ;



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

