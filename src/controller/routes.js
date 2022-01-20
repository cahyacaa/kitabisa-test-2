const teamController = require('./teamController');
const playerController = require('./playerController');
const {
    createTeam
} = require('../schema/teamSchema');
const {
    createPlayer
} = require('../schema/playerSchema');

const routes = [{
    method: 'GET',
    url: '/api/teams/:id',
    handler: teamController.getDetailTeam
}, {
    method: 'POST',
    url: '/api/teams',
    handler: teamController.createTeam,
    schema: {
        body: createTeam
    }
}, {
    method: 'GET',
    url: '/api/players/:id',
    handler: playerController.getPlayer
}, {
    method: 'POST',
    url: '/api/players',
    handler: playerController.createPlayer,
    schema: {
        body: createPlayer
    }
}]

module.exports = routes