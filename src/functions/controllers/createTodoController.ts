import createItem from "src/repository/seqeulizeMethodsForDatabase/createItem";
import TodoModel from "../../../database/models/TodoModel"

const createTodoController= async(data:object)=>{

 return await createItem(TodoModel,data)

}
 export default createTodoController;