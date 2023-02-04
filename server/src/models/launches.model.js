
const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber:100,
    mission: 'Kepler',
    rocket: 'Explorer',
    launchDate: new Date('December 27,2030'),
    target: 'Kimo',
    customer: ['ztm','nasa'],
    upcoming:true,
    success:true
}


launches.set(launch.flightNumber , launch);

function getAllLaunches(){
    return Array.from(launches.values())
}

function addNewLaunch(launch){
    latestFlightNumber++;
    const additions = {
        flightNumber: latestFlightNumber,
        customers:['Zero To Mastery' , 'Nasa'],
        upcoming: true,
        success: true
    }
    launches.set(latestFlightNumber , Object.assign(launch,additions));
}
module.exports = {
getAllLaunches,
addNewLaunch
}