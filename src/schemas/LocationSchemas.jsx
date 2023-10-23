import * as Joi from "joi";

export const LocationSchemas = {
    postalCodeSchema: Joi.string()// XXXXX-XXX
        .pattern(new RegExp(/^\d{5}-\d{3}$/)),

    citySchema: Joi.string() // string entre 4 e 100 caracteres
        .trim()
        .min(4)
        .max(100),

    stateSchema: Joi.string() // Deve ter 2 caracteres maiúsculos
        .pattern(/^[AZ]{2}$/),

    addressSchema: Joi.string()
        .trim()
        .min(1),

    neighborhoodSchema: Joi.string()
        .trim()
        .min(3),
}