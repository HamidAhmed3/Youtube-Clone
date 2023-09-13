const {Model, DataTypes} = require('sequelize');
const sequelize = require('../../bin/dbConnection');

class PlayListVideos extends Model{}

PlayListVideos.init(
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
          },
    },
    {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "PlayListVideos",
    }
);

module.exports = PlayListVideos;