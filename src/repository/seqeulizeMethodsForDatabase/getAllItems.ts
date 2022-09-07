/**
 * Function Retrieve data from database.
 *
 * @param {Model} model
 *
 * @returns <Promise{object}>
 */


 const getAllItems = async (model:any) => {
    return await model.findAndCountAll()
  
  };
  
  export default getAllItems;
  