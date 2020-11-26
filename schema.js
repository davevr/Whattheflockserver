const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        levels : [Level]
    }
    
    
    type Level {
        id: ID!
        name: String
        description: String
        sheep: [SheepObj!]
        width: Float!
        height: Float!
        exit: SingleObj!
        allowedTime: Int!
        fences: [FenceObj]
        electricFences: [SingleObj]
        bushes: [SingleObj]
        puddles: [PuddleObj]
        mudPuddles: [PuddleObj]
        holes: [RabbitHole]
        dogs: [DogRun]
        stars: [Star]
    }
    
    type SheepObj {
        xLoc: Float!
        zLoc: Float!
    }
    
    type SingleObj {
        xLoc: Float!
        zLoc: Float!
        angle: Float!
    }
    
    type FenceObj {
        startX: Float!
        startZ: Float!
        endX: Float!
        endZ: Float!
    }
    
    type PuddleObj {
        xLoc: Float!
        zLoc: Float!
        width: Float!
        height: Float!
        angle: Float!
    }
    
    type DogRun {
        startX: Float!
        startZ: Float!
        endX: Float!
        endZ: Float!
        speed: Float!
    }
    
    type Hole {
        xLoc: Float!
        zLoc: Float!
    }
    
    type RabbitHole {
        entryHole: Hole!
        exitHole: Hole!
    }
    
    type Star {
        xLoc: Float!
        zLoc: Float!
        bonus: Int!
    }
    
`;

module.exports = typeDefs;
