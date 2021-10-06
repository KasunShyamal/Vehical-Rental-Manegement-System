export const setErrors = (title,description,category)=>{
    let errors = {};
    errors.title = title ?"" : "Description is required";
    errors.category = category ?"":"Category is required";
    return errors;

};