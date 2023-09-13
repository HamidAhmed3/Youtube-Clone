const {Model, DataTypes} = require('sequelize');
const sequelize = require('../../bin/dbConnection');

class PlayList extends Model{}

PlayList.init(
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
        modelName: "PlayList",
    }
);

module.exports = PlayList;