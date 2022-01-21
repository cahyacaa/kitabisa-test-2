const playerData = [];

const playerRepo = {
    getPlayerById(id){
        const index= playerData.findIndex(player=> id === player.id);
        return playerData[index];
    },
    getPlayeByTeamIdData(teamId){
        const data = playerData.filter(player=> teamId === player.teamId);
        return data;
    },
    createPlayer(data){
        const id = playerData.length +1;
        playerData.push({
            id,
            ...data
        });
        return {
            id,
            ...data
        };
    }
}

module.exports = playerRepo;