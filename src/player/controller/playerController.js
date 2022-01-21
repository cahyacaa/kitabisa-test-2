const playerService = require("../services/playerService");

// Handlers
const getPlayer = async (req, reply) => {
    const id = Number(req.params.id);
    const playerData = playerService.getDetailPlayer(id);
    return reply.send(playerData);
}

const createPlayer = async (req, reply) => {
    const input = req.body;
    const playerData = playerService.createPlayer(input);
    return reply.send({
        msg: "success insert one data",
        data: playerData
    });
}
module.exports = {
    getPlayer,
    createPlayer
};