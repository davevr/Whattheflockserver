const Sequelize = require('sequelize');


module.exports.createSql = () => {
    let options = [];

    const host = '127.0.0.1'; // local machine mySQL
    const pwd = 'password';
    const username = 'root';



    const db = new Sequelize('wtfdata', username, pwd, {
        host: host,
        dialect: 'mysql',
        dialectOptions: options,
        operatorsAliases: Sequelize.Op,
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    });


    const SheepObj = db.define('sheepobj', {
        xLoc: Sequelize.FLOAT,
        zLoc: Sequelize.FLOAT,
    });

    const SingleObj = db.define('singleobj', {
        xLoc: Sequelize.FLOAT,
        zLoc: Sequelize.FLOAT,
        angle: Sequelize.FLOAT,
    });

    const FenceObj = db.define('fenceobj', {
        startX: Sequelize.FLOAT,
        startZ: Sequelize.FLOAT,
        endX: Sequelize.FLOAT,
        endZ: Sequelize.FLOAT,
    });

    const PuddleObj = db.define('puddleobj', {
        xLoc: Sequelize.FLOAT,
        zLoc: Sequelize.FLOAT,
        width: Sequelize.FLOAT,
        height: Sequelize.FLOAT,
        angle: Sequelize.FLOAT,
    });

    const DogRun = db.define('dogrun', {
        startX: Sequelize.FLOAT,
        startZ: Sequelize.FLOAT,
        endX: Sequelize.FLOAT,
        endZ: Sequelize.FLOAT,
        speed: Sequelize.FLOAT,
    });

    const Hole = db.define('hole', {
        xLoc: Sequelize.FLOAT,
        zLoc: Sequelize.FLOAT,
    });

    const Star = db.define('star', {
        xLoc: Sequelize.FLOAT,
        zLoc: Sequelize.FLOAT,
        bonus: Sequelize.FLOAT,
    });

    const RabbitHole = db.define('rabbithole', {
        entryHoleId: Sequelize.INTEGER,
        exitHoleId: Sequelize.INTEGER,
    });

    const Level = db.define('level', {
        width: Sequelize.FLOAT,
        height: Sequelize.FLOAT,
        exitID: Sequelize.INTEGER,
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        allowedTime: Sequelize.INTEGER,
    });

    const SheepToLevelAssoc = db.define('sheepToLevelAssoc', {
        levelId: Sequelize.INTEGER,
        sheepId: Sequelize.INTEGER,
    });

    const FenceToLevelAssoc = db.define('fenceToLevelAssoc', {
        levelId: Sequelize.INTEGER,
        fenceId: Sequelize.INTEGER,
    });

    const EFenceToLevelAssoc = db.define('eFenceToLevelAssoc', {
        levelId: Sequelize.INTEGER,
        eFenceId: Sequelize.INTEGER,
    });

    const BushToLevelAssoc = db.define('bushToLevelAssoc', {
        levelId: Sequelize.INTEGER,
        bushId: Sequelize.INTEGER,
    });

    const PuddleToLevelAssoc = db.define('puddleToLevelAssoc', {
        levelId: Sequelize.INTEGER,
        puddleId: Sequelize.INTEGER,
    });

    const MudPuddleToLevelAssoc = db.define('mudPuddleToLevelAssoc', {
        levelId: Sequelize.INTEGER,
        mudPuddleId: Sequelize.INTEGER,
    });

    const HoleToLevelAssoc = db.define('holeToLevelAssoc', {
        levelId: Sequelize.INTEGER,
        holeId: Sequelize.INTEGER,
    });

    const DogToLevelAssoc = db.define('dogToLevelAssoc', {
        levelId: Sequelize.INTEGER,
        dogId: Sequelize.INTEGER,
    });

    const StarToLevelAssoc = db.define('starToLevelAssoc', {
        levelId: Sequelize.INTEGER,
        starId: Sequelize.INTEGER,
    });



    return {
        db,
        SheepObj,
        SingleObj,
        FenceObj,
        PuddleObj,
        DogRun,
        Hole,
        Star,
        RabbitHole,
        Level,
        SheepToLevelAssoc,
        FenceToLevelAssoc,
        EFenceToLevelAssoc,
        BushToLevelAssoc,
        PuddleToLevelAssoc,
        MudPuddleToLevelAssoc,
        HoleToLevelAssoc,
        DogToLevelAssoc,
        StarToLevelAssoc,
    };
}
