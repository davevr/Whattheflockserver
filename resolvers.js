
module.exports = {
    Query: {
        levels: async (_, __, { dataSources }) =>
            //dataSources.getTheLevels;
        {
            return dataSources.wtfAPI.getLevels();
        }

    },

    Level: {
        sheep: async (level, __, { dataSources}) => {
            return dataSources.wtfAPI.getSheepForLevel(level.id);
        },

        exit: async (level, __, { dataSources}) => {
            return dataSources.wtfAPI.getExitForLevel(level.id);
        },


        fences: async (level, __, { dataSources}) => {
            return dataSources.wtfAPI.getFencesForLevel(level.id);
        },


        electricFences: async (level, __, { dataSources}) => {
            return dataSources.wtfAPI.getEFenceForLevel(level.id);
        },

        bushes: async (level, __, { dataSources}) => {
            return dataSources.wtfAPI.getBushesForLevel(level.id);
        },


        puddles: async (level, __, { dataSources}) => {
            return dataSources.wtfAPI.getPuddlesForLevel(level.id);
        },


        mudPuddles: async (level, __, { dataSources}) => {
            return dataSources.wtfAPI.getMudPuddlesForLevel(level.id);
        },

        holes: async (level, __, { dataSources}) => {
            return dataSources.wtfAPI.getHolesForLevel(level.id);
        },


        dogs:async (level, __, { dataSources}) => {
            return dataSources.wtfAPI.getDogsForLevel(level.id);
        },


        stars: async (level, __, { dataSources}) => {
            return dataSources.wtfAPI.getStarsForLevel(level.id);
        },


    },
};
