const playerRepo = require("../../repository/playerRepo");

function getDetailPlayer(id){
    const playerData = playerRepo.getPlayerById(id);
    return playerData;
}

function createPlayer(data){
    return playerRepo.createPlayer(data);
}
module.exports = {getDetailPlayer,createPlayer};