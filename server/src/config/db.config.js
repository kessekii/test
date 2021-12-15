module.exports = {
    HOST: "mysql_db",
    USER: "root",
    PASSWORD: '123456',
    DB: "song_list",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};