const {launches} = require('../../models/launches.model'); 

function getAllLaunches(req , res){

    return res.stats(200).json(Array.from(launches.values()));
}

module.exports = {
    getAllLaunches
};