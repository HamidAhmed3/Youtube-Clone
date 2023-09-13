const {Model, DataTypes} = require('sequelize');
const sequelize = require('../../bin/dbConnection');

class LikedVideos extends Model{}

LikedVideos.init(
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
        modelName: "LikedVideos",
    }
);

module.exports = LikedVideos;