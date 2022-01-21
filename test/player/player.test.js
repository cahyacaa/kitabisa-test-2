const playerRepo = require('../../src/repository/playerRepo');
const playerService = require('../../src/player/services/playerService');
const build = require('../../src/app');
const app = build();
const {
    player
} = require('./mock.data');


describe("testing-play-repository", () => {
    it("create a player", async () => {
        const result = playerRepo.createPlayer(player);
        expect(result).toStrictEqual({
            id: 1,
            ...player
        });
    });
    it("find one player by id = 1", async () => {
        const id = 1;
        const result = playerRepo.getPlayerById(id);
        expect(result).toStrictEqual({
            id: id,
            ...player
        });
    });
});


describe("testing-player-service", () => {
    it("create a player", async () => {
        const result = playerService.createPlayer(player);

        expect(result).toHaveProperty('name', player.name);
        expect(result).toHaveProperty('teamId', player.teamId);
    });
    it("find one player id = 1", async () => {
        const id = 1;
        const result = playerService.getDetailPlayer(id);
        expect(result).toStrictEqual({
            id: id,
            ...player
        });
    });
});

describe("testing-server-routes", () => {
    it("POST /api/players - success", async () => {
        const res = await app.inject({
            url: "/api/players",
            method: "POST",
            payload: player
        });
        expect(res.json()).toEqual({
            msg: "success insert one data",
            data: {id:3,...player}
        });
    });
    it("GET /api/players/:id - success", async () => {
        const res = await app.inject({
            url: "/api/players/1",
        });
        expect(res.json()).toEqual({
            id: 1,
            teamId: 1,
            name: "Roman Alex"
        });
    });
});