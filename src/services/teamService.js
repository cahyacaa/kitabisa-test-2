const teamRepo = require('../repository/teamRepo');


function getDetailTeam(id){
    const teamData = teamRepo.getTeamData(id);
    return teamData;
}

function createTeam(data){
    const teamData = teamRepo.createTeam(data);
    return teamData;
}

module.exports = {
    getDetailTeam,
    createTeam
};