import getItemByPK from "src/repository/seqeulizeMethodsForDatabase/getItemByPK";

/**
 * Controller for retrieve data  form DB.
 * 
 * @param {Modelsequelize} model 
 * @param {number}pk 
 * 
 * @returns <Promise{object}>
 */
const getTodoController= async(model:any,pk:number)=>{

 return await getItemByPK(model,pk);

}
 export default getTodoController;