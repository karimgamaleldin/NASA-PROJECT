
const launches = new Map();

const launch = {
    flightNumber:100,
    mission: 'Kepler',
    rocket: 'Explorer',
    launchDate: new Date('December 27,2030'),
    destination: 'Kimo',
    customer: ['ztm','nasa'],
    upcoming:true,
    success:true
}


launches.set(launch.flightNumber , launch);

module.exports = {
launches
}