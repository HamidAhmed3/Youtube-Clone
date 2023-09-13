const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports = {
    createUser : async (body) => {
        try{
            const saltRounds = 10;
            body.password = await bcrypt.hash(body.password, saltRounds);
            const response = await userModel.createUser(body);
            if(response) {
                return response;
            }
            return "user not created";
        } catch (error) {
            return error;
        }
    },

    getUserByEmail: async (email) => {
        try{
            const response = await userModel.getUserByEmail(email);
            if(response) {
                return response;
            }
            return "No such user exist";
        } catch(error) {
            return error;
        }
    }

}