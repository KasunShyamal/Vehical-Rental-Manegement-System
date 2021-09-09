import joi from "joi"

const Validations = (category_for_validation) => {
    const schema = joi.object({
     
     
        category: joi.string().min(3).max(255).required().messages({
            "string.empty": ` Category is required.`,
            "any.required": ` Category is required.`,
            "string.base": ` Category should be a type of 'text'.`,
            "string.min": ` Category should have a minimum length of {#limit}.`,
            "string.max": ` Category should have a maximum length of {#limit}.`,
        }),


    });

    const result = schema.validate(category_for_validation);

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

export default Validations;