const {models} = require('../models/index')

module.exports = {
    createUser : async (body) => {
        try{
            return await models.User.create({ ...body });
        } catch (error) {
            return error;
        }
    },

    getUserByEmail : async (email) => {
        try{
            return await models.User.findOne({
                where: {
                    email: email,
                },
                attributes: {
                    exclude: ["password"],
                },
            });
        }catch (error) {
            return error;
        }
    },
}