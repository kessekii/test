module.exports = (sequelize, Sequelize) => {
    const song_list = sequelize.define("song", {
        song_name: {
            type: Sequelize.STRING
        },
        band: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.STRING
        }
    })

    return song_list
}