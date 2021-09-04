import joi from "joi"

const vehicleValidations = (vehicle_for_validation) => {
    const schema = joi.object({
        brand: joi.string().min(3).max(255).required().messages({
            "string.empty": `Vehicle Brand is required.`,
            "any.required": `Vehicle Brand is required.`,
            "string.base": `Vehicle Brand should be a type of 'text'.`,
            "string.min": `Vehicle Brand should have a minimum length of {#limit}.`,
            "string.max": `Vehicle Brand should have a maximum length of {#limit}.`,
        }),
        vehicleNumber: joi.string().min(3).max(255).required().messages({
            "string.empty": `Vehicle Number is required.`,
            "any.required": `Vehicle Number is required.`,
            "string.base": `Vehicle Number should be a type of 'text'.`,
            "string.min": `Vehicle Number should have a minimum length of {#limit}.`,
            "string.max": `Vehicle Number should have a maximum length of {#limit}.`,
        }),
        price: joi.number().positive().required().messages({
            "number.positive": `Rent for the vehicle can not be negative value.`,
            "any.required": `Vehicle rent is required.`,
            "number.base": `Please enter vehicle rent.`,
        }),
        milage: joi.number().positive().required().messages({
            "number.positive": `Milage of vehicle can not be negative value.`,
            "any.required": `Vehicle milage is required.`,
            "number.base": `Please enter vehicle milage.`,
        }),
        sheets: joi.number().positive().min(2).required().messages({
            "number.positive": `Sheets of vehicle can not be negative value.`,
            "any.required": `Vehicle sheets count is required.`,
            "number.base": `Please enter vehicle sheets count.`,
            "number.min": `Sheet count cannot be less than 2.`,
        }),
        condition: joi.string().min(3).max(255).required().messages({
            "string.empty": ` Vehicle Condition is required.`,
            "any.required": ` Vehicle Condition is required.`,
            "string.base": ` Vehicle Condition should be a type of 'text'.`,
            "string.min": ` Vehicle Condition should have a minimum length of {#limit}.`,
            "string.max": ` Vehicle Condition should have a maximum length of {#limit}.`,
        }),
        description: joi.string().min(3).max(255).required().messages({
            "string.empty": ` Vehicle description is required.`,
            "any.required": ` Vehicle description is required.`,
            "string.base": ` Vehicle description should be a type of 'text'.`,
            "string.min": ` Vehicle description should have a minimum length of {#limit}.`,
            "string.max": ` Vehicle description should have a maximum length of {#limit}.`,
        }),
        category: joi.string().min(3).max(255).required().messages({
            "string.empty": ` Category is required.`,
            "any.required": ` Category is required.`,
            "string.base": ` Category should be a type of 'text'.`,
            "string.min": ` Category should have a minimum length of {#limit}.`,
            "string.max": ` Category should have a maximum length of {#limit}.`,
        }),


    });

    const result = schema.validate(vehicle_for_validation);

    if (result.error) {
        return {
            status: false,
            error: result.error.message,
        }
    } else {
        return {
            status: true
        }
    }
};

export default vehicleValidations;