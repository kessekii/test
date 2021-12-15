module.exports = (sequelize, Sequelize) => {
    if (sequelize.authenticate()) {
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

        }, { tableName: 'song_list' })

        return song_list
    }
}