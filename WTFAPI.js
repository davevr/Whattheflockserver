const {DataSource} = require('apollo-datasource');

class WTFAPI extends DataSource {
    constructor(props) {
        const {store} = props;
        super();
        this.store = store;
        this.inited = false;

    }

    async handleCreate() {
        if (!this.inited) {
            this.inited = true;

        }
    }


    async initialize(config) {
        if (!this.inited)
            await this.handleCreate();

        const context = config.context;

        this.context = context;

    }

    async getLevels() {
        const levels = await this.store.Level.findAll();
        return levels;
    }

    async getSheepForLevel(levelId) {
        const sheep = await this.store.SheepObj.findAll({
        where: {
            levelId: levelId}
        });

        return sheep;
    }

    async getExitForLevel(levelId) {
        const exits = await this.store.ExitObj.findAll({
            where: {
                levelId: levelId}
        });

        return exits;
    }

    async getFencesForLevel(levelId) {
        const fences = await this.store.FenceObj.findAll({
            where: {
                levelId: levelId}
        });

        return fences;
    }

    async getEFenceForLevel(levelId) {
        const eFences = await this.store.EFenceObj.findAll({
            where: {
                levelId: levelId}
        });

        return eFences;
    }

    async getBushesForLevel(levelId) {
        const bushes = await this.store.BushObj.findAll({
            where: {
                levelId: levelId}
        });

        return bushes;
    }

    async getPuddlesForLevel(levelId) {
        const puddles = await this.store.PuddleObj.findAll({
            where: {
                levelId: levelId}
        });

        return puddles;
    }

    async getMudPuddlesForLevel(levelId) {
        const mudPuddles = await this.store.MudPuddleObj.findAll({
            where: {
                levelId: levelId}
        });

        return mudPuddles;
    }

    async getHolesForLevel(levelId) {
        const rabbitHoles = await this.store.RabbitHole.findAll({
            where: {
                levelId: levelId}
        });

        return rabbitHoles;
    }

    async getDogsForLevel(levelId) {
        const dogs = await this.store.DogRun.findAll({
            where: {
                levelId: levelId}
        });

        return dogs;
    }

    async getStarsForLevel(levelId) {
        const stars = await this.store.Star.findAll({
            where: {
                levelId: levelId}
        });

        return stars;
    }

    async createLevel(newLevelData) {
        // to do:  create the level
        const newLevel = null;

        return newLevel;
    }
}

module.exports = WTFAPI;

