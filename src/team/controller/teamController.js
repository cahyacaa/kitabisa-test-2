const teamService = require("../services/teamService")

// Handlers
const getDetailTeam = async (req, reply) => {
    const id = Number(req.params.id);
    let result;
    const teamData = teamService.getDetailTeam(id);
    if (teamData.length === 1) result = teamData[0];
    return reply.send(result);
}

const createTeam = async (req, reply) => {
    const input = req.body;
    const teamData = teamService.createTeam(input);
    return reply.send({
        msg: "success insert one data",
        data: teamData
    });
}
module.exports = {
    getDetailTeam,
    createTeam
};