const teamService = require("../services/teamService")

// Handlers
const getDetailTeam = async (req, reply) => {
    const id = Number(req.params.id);
    const teamData = teamService.getDetailTeam(id);
    return reply.send(teamData);
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