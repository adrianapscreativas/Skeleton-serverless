import User from "database/models/user";
import createItem from "src/repository/seqeulizeMethodsForDatabase/createItem";
/**
 * Controller for proccessing data.
 * 
 * @param {object} data
 *  
 * @returns 
 */
const createUserController = async (data:any) => {

    return  await createItem (User,data)
    
}

export default createUserController;