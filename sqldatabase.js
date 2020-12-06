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
        levelId: Sequelize.INTEGER,
    });

    const ExitObj = db.define('exitobj', {
        xLoc: Sequelize.FLOAT,
        zLoc: Sequelize.FLOAT,
        angle: Sequelize.FLOAT,
        levelId: Sequelize.INTEGER,
    });

    const EFenceObj = db.define('efenceobj', {
        xLoc: Sequelize.FLOAT,
        zLoc: Sequelize.FLOAT,
        angle: Sequelize.FLOAT,
        levelId: Sequelize.INTEGER,
    });

    const BushObj = db.define('bushobj', {
        xLoc: Sequelize.FLOAT,
        zLoc: Sequelize.FLOAT,
        angle: Sequelize.FLOAT,
        levelId: Sequelize.INTEGER,
    });

    const FenceObj = db.define('fenceobj', {
        startX: Sequelize.FLOAT,
        startZ: Sequelize.FLOAT,
        endX: Sequelize.FLOAT,
        endZ: Sequelize.FLOAT,
        levelId: Sequelize.INTEGER,
    });

    const PuddleObj = db.define('puddleobj', {
        xLoc: Sequelize.FLOAT,
        zLoc: Sequelize.FLOAT,
        width: Sequelize.FLOAT,
        height: Sequelize.FLOAT,
        angle: Sequelize.FLOAT,
        levelId: Sequelize.INTEGER,
    });

    const MudPuddleObj = db.define('mudpuddleobj', {
        xLoc: Sequelize.FLOAT,
        zLoc: Sequelize.FLOAT,
        width: Sequelize.FLOAT,
        height: Sequelize.FLOAT,
        angle: Sequelize.FLOAT,
        levelId: Sequelize.INTEGER,
    });


    const DogRun = db.define('dogrun', {
        startX: Sequelize.FLOAT,
        startZ: Sequelize.FLOAT,
        endX: Sequelize.FLOAT,
        endZ: Sequelize.FLOAT,
        speed: Sequelize.FLOAT,
        levelId: Sequelize.INTEGER,
    });

    const Star = db.define('star', {
        xLoc: Sequelize.FLOAT,
        zLoc: Sequelize.FLOAT,
        bonus: Sequelize.FLOAT,
        levelId: Sequelize.INTEGER,
    });

    const RabbitHole = db.define('rabbithole', {
        xLocEntry: Sequelize.FLOAT,
        zLocEntry: Sequelize.FLOAT,
        xLocExit: Sequelize.FLOAT,
        zLocExit: Sequelize.FLOAT,
        levelId: Sequelize.INTEGER,
    });

    const Level = db.define('level', {
        width: Sequelize.FLOAT,
        height: Sequelize.FLOAT,
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        allowedTime: Sequelize.INTEGER,
    });





    return {
        db,
        SheepObj,
        ExitObj,
        FenceObj,
        BushObj,
        EFenceObj,
        PuddleObj,
        MudPuddleObj,
        DogRun,
        Star,
        RabbitHole,
        Level,
    };
}
