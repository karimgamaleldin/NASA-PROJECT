const {getAllLaunches} = require('../../models/launches.model'); 

function httpGetAllLaunches(req , res){

    return res.stats(200).json(getAllLaunches());
}

module.exports = {
    httpGetAllLaunches
};