const build = require('../../src/app');
const playerRepo = require('../../src/repository/playerRepo');
const app = build();
const teamRepo = require('../../src/repository/teamRepo');
const teamService = require('../../src/team/services/teamService');
const { player } = require('../player/mock.data');
const { teamData } = require('./mock.data');


describe("testing-team-repository", () => {
    it("create a team", async () => {
        const result = teamRepo.createTeam(teamData);
        expect(result).toStrictEqual({
            id: 1,
            ...teamData
        });
    });
    it("find one team by id = 1", async () => {
        const id = 1;
        const result = teamRepo.getTeamData(id);
        expect(result).toStrictEqual(teamData);
    });
});

describe("testing-team-service", () => {
    it("create a team", async () => {
        const result = teamService.createTeam(teamData);
        expect(result).toStrictEqual({
            id: 1,
            ...teamData
        });
    });
    it("find one team by id = 1 non player", async () => {
        const id = 1;
        const result = teamService.getDetailTeam(id);
        expect(result).toStrictEqual(teamData);
    });
});


describe("testing-server-routes", () => {
    it("POST /api/teams - success", async () => {
        const res = await app.inject({
            url: "/api/teams",
            method: "POST",
            payload: teamData
        });
        expect(res.json()).toEqual({
            msg: "success insert one data",
            data: teamData
        });
    });
    it("GET /api/teams/:id - success", async () => {
        const res = await app.inject({
            url: "/api/teams/1",
        });
        expect(res.json()).toEqual({
            id: 1,
            ...teamData
        });
    });
    it("GET /api/teams/:id with teams - success", async () => {
        const playerData = playerRepo.createPlayer(player);
        const res = await app.inject({
            url: "/api/teams/1",
        });
        expect(res.json()).toEqual({
            ...teamData,
            player: [playerData]
        });
    });
});