const sequelize = require('../bin/dbConnection');

// models import

const {User, Channel, Videos, LikedVideos, WatchLater, PlayList, PlayListVideos, History} = require('./definitions/index');
// relations
User.hasOne(Channel, { foreignKey: "userId"});
Channel.belongsTo(User, { foreignKey: { name: "userId", allowNull: false } });

User.hasMany(PlayList, { foreignKey: "userId" });
PlayList.belongsTo(User, {foreignKey: { name: "userId", allowNull: false } });

Videos.hasMany(PlayListVideos, { foreignKey: "videosId" });
PlayListVideos.belongsTo(Videos, { foreignKey: { name: "videosId", allowNull: false } });
PlayList.hasMany(PlayListVideos, { foreignKey: "playListId" });
PlayListVideos.belongsTo(PlayList, { foreignKey: { name: "playListId", allowNull: false } });

User.hasMany(History, { foreignKey: "userId"});
History.belongsTo(User, { foreignKey: { name: "userId", allowNull: false } });
Videos.hasMany(History, { foreignKey: "videosId"});
History.belongsTo(Videos, { foreignKey: { name: "videosId", allowNull: false } });

User.hasMany(LikedVideos, { foreignKey: "userId"});
LikedVideos.belongsTo(User, { foreignKey: { name: "userId", allowNull: false } });
Videos.hasMany(LikedVideos, { foreignKey: "videosId"});
LikedVideos.belongsTo(Videos, { foreignKey: { name: "videosId", allowNull: false } });

User.hasMany(WatchLater, { foreignKey: "userId" });
WatchLater.belongsTo(User, { foreignKey: { name: "userId", allowNull: false } });
Videos.hasMany(WatchLater, { foreignKey: "videoId" });
WatchLater.belongsTo(Videos, { foreignKey: { name: "videoId", allowNull: false } });




// model arrays
const models = {User, Channel, Videos, LikedVideos, WatchLater, PlayList, PlayListVideos, History};

const db = {};
db.sequelize = sequelize;
models.sequelize = models;

module.exports = {db, models};