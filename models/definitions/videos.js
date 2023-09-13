const {Model, DataTypes} = require('sequelize');
const sequelize = require('../../bin/dbConnection');

class Videos extends Model{}

Videos.init(
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
        modelName: "Videos",
    }
);

module.exports = Videos;