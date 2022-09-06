/**
 * Function for Sequelize creates a new value in a table.
 *
 * @param {string} model
 * @param {object} data
 *
 * @returns <Promise{object}>
 */

 const createItem = async (model:any, data:any) => {
 return await model.create(data);
  
  
  };
  
  export default createItem;
  