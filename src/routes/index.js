const teamController = require('../team/controller/teamController');
const playerController = require('../player/controller/playerController');
const {
    createTeam
} = require('../team/schema/teamSchema');
const {
    createPlayer
} = require('../player/schema/playerSchema');

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