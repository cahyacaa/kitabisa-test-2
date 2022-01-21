const playerRepo = require('../../repository/playerRepo');
const teamRepo = require('../../repository/teamRepo');


function getDetailTeam(id) {
    const teamData = teamRepo.getTeamData(id);
    const playerData = playerRepo.getPlayeByTeamIdData(id);
    const result = {
        ...teamData
    };
    if(playerData.length>0) result.player = playerData;
    return result;
}

function createTeam(data) {
    const teamData = teamRepo.createTeam(data);
    return teamData;
}

module.exports = {
    getDetailTeam,
    createTeam
};