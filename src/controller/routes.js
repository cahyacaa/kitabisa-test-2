const teamController = require('./teamController');
const playerController = require('./playerController');

const routes = [{
    method: 'GET',
    url: '/api/teams/:id',
    handler: teamController.getDetailTeam
},{
    method: 'POST',
    url: '/api/teams',
    handler: teamController.createTeam
},{
    method: 'GET',
    url: '/api/players/:id',
    handler: playerController.getPlayer
},{
    method: 'POST',
    url: '/api/players',
    handler: playerController.createPlayer
}]

module.exports = routes