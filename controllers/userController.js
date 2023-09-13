const userService = require('../services/userService');
const joi = require('joi');
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const createUserSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});

const getUserByEmail = joi.object({
    email: joi.string().email().required(),
});

module.exports = {
    createUser : async (req, res) => {
        try{
            const validate = await createUserSchema.validateAsync(req.body);
            if(validate.error) {
                res.status(StatusCodes.BAD_REQUEST).send({
                    data: {},
                    message: ReasonPhrases.BAD_REQUEST,
                    error: validate.error,
                });
            }
            const response = await userService.createUser(validate);
            res.status(StatusCodes.OK).send({
                data: { response },
                message: ReasonPhrases.OK,
                error: {},
            });
        }catch (error) {
            res.status(StatusCodes.NOT_FOUND).send({
                data: {},
                message: ReasonPhrases.NOT_FOUND,
                error: error,
            });
        }   
    },

    getUserByEmail : async (req, res) => {
        try{
            const validate = await getUserByEmail.validateAsync(req.query);
            if(validate.error) {
                res.status(StatusCodes.BAD_REQUEST).send({
                    data: {},
                    message: ReasonPhrases.BAD_REQUEST,
                    error: validate.error,
                });
            }
            const response = await userService.getUserByEmail(validate.email);
            res.status(StatusCodes.OK).send({
                data: { response },
                message: ReasonPhrases.OK,
                error: {},
            });
        }catch (error) {
            res.status(StatusCodes.NOT_FOUND).send({
                data: {},
                message: ReasonPhrases.NOT_FOUND,
                error: error,
            });
        }   
    },
}