const {Model, DataTypes} = require('sequelize');
const sequelize = require('../../bin/dbConnection');

class WatchLater extends Model{}

WatchLater.init(
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
        modelName: "WatchLater",
    }
);

module.exports = WatchLater;