import { Model } from "sequelize/types";

/**
 * Functions to logically remove from the database
 * 
 * @param {Model} model 
 * @param {object} params
 * 
 * @returns  <Promise{object}>
 */
 const deleteLogic = async (model:Model,params: any ) => {
    const getReponse = await model.destroy( {
        ...params,
        force: true
      });
    return getReponse;
  };
  
  export default deleteLogic;
  