import createItem from "src/repository/seqeulizeMethodsForDatabase/createItem";
import TodoModel from "../../../database/models/TodoModel"

/**
 * Controller for processing logic.
 * 
 * @param {object} data 
 * 
 * @returns <Promise{object}>
 */
const createTodoController= async(data:object)=>{

 return await createItem(TodoModel,data)

}
 export default createTodoController;