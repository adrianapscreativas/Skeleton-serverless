import getAllItems from "src/repository/seqeulizeMethodsForDatabase/getAllItems";

/**
 * Controller for retrieve all model data from DB.
 * 
 * @param model 
 * 
 * @returns <Promise{object}>
 */
const getTodoController= async(model:any)=>{

 return await getAllItems(model);

}
 export default getTodoController;