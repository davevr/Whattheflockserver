
module.exports = {
    Query: {
        levels: async (_, __, { dataSources }) =>
            //dataSources.getTheLevels;
        {
            return dataSources.wtfAPI.getLevels();
        }

    },

    Level: {
        sheep: async (level, __, ___) => {
            const sheep = [{
                xLoc: 10,
                zLoc: 20,
            }, {
                xLoc: 10,
                zLoc: 20,
            }
            ];
            return sheep;
        },

        exit: async (level, __, ___) => {
            const exit = {
                xLoc: 10,
                zLoc: 10,
                angle: 100,
            };

            return exit;
        },

        fences: async (level, __, ___) => {
            const fences = [{
                startX: -10,
                startZ: -10,
                endX: 10,
                endZ: 10,
            }];

            return fences;
        },

        electricFences: async (level, __, ___) => {
            const eFences = [{
                xLoc: 10,
                zLoc: 10,
                angle: 100,
            }];

            return eFences;
        },

        bushes: async (level, __, ___) => {
            const bushes = [{
                xLoc: 10,
                zLoc: 10,
                angle: 100,
            }];

            return bushes;
        },

        puddles: async (level, __, ___) => {
            const puddles = [{
                xLoc: 10,
                zLoc: 10,
                angle: 100,
                width: 5,
                height: 4,
            }];

            return puddles;
        },

        mudPuddles: async (level, __, ___) => {
            const puddles = [{
                xLoc: 10,
                zLoc: 10,
                angle: 100,
                width: 5,
                height: 4,
            }];

            return puddles;
        },

        holes: async (level, __, ___) => {
            const holes = [{
                entryHole: {
                    xLoc: 5,
                    zLoc: 5,
                },
                exitHole: {
                    xLoc: 5,
                    zLoc: 5,
                }
            }];

            return holes;
        },

        dogs: async (level, __, ___) => {
            const dogs = [{
                startX: 10,
                startZ: 10,
                endX: -10,
                endZ: -10,
                speed: 5,
            }];

            return dogs;
        },

        stars: async (level, __, ___) => {
            const stars = [{
                xLoc: 10,
                zLoc: 10,
            }];

            return stars;
        }

    },
};
