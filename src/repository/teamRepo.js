const teamData = [];

const teamRepo = {
    getTeamData(id){
        const index= teamData.findIndex(team=> id === team.id);
        return teamData[index];
    },
    createTeam(data){
        const id = teamData.length + 1;
        teamData.push({
            id,
            ...data
        });
        return {
            id,...data
        }
    }

}

module.exports = teamRepo;