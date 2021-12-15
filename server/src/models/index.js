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
    .on('data', (data) => {
        try {
            song_list.push(data)
            console.log('BB')
        } catch (err) {
            console.error(err)
        }
    })
    .on('error', (error) => {
        console.error(error)
    })
console.log('AA')
module.exports = db