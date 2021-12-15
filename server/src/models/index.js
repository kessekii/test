const dbConfig = require("../config/db.config.js")
const fs = require("fs")
const csv = require("csv-parser")

const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.song_list = require("./song.model.js")(sequelize, Sequelize)






let song_list = []

fs.createReadStream('./song_list.csv')
    .pipe(csv())
    .on('data', async(data) => {
        try {
            const a = await db.song_list.findAll({
                where: {
                    song_name: data.Song_Name
                }
            })
            if (a.length == 0) {
                const song = await db.song_list.create({
                    song_name: data.Song_Name.toLowerCase(),
                    band: data.Band.toLowerCase(),
                    year: data.Year
                })
                console.log('Song added')
            }
        } catch (err) {
            console.error(err)
        }
    })
    .on('error', (error) => {
        console.error(error)
    })

module.exports = db