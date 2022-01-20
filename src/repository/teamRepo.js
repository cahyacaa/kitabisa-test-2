const playerRepo = require('./playerRepo');
const teamData = [{
    id:1,
    name:'Wings Team'
}]

const teamRepo = {
    getAllData(){
        return teamData;
    },
    getTeamData(id){
        const data = teamData.filter(team=>{
            const player = playerRepo.getPlayeByTeamIdData(id);
            team.player = player;
            return team.id === id;
        });
        return data;
    },
    createTeam(data){
        const id = teamData.length + 1;
        teamData.push({
            id,
            ...data
        });
        console.log(teamData)
        return {
            id,...data
        }
    }

}

module.exports = teamRepo;