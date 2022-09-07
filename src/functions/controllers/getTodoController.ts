import getAllItems from "src/repository/seqeulizeMethodsForDatabase/getAllItems";

const getTodoController= async(model:any)=>{

 return await getAllItems(model);

}
 export default getTodoController;