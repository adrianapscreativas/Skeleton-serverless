import getItemByPK from "src/repository/seqeulizeMethodsForDatabase/getItemByPK";

const getTodoController= async(model:any,pk:number)=>{

 return await getItemByPK(model,pk);

}
 export default getTodoController;