/**
 *
 * Function search for Primary key.
 *
 * @param  {any} model
 * @param  {number} pk
 *
 * @return objetos con los datos buscados
 */

 const getItemByPK = async (model:any, pk:number) => {
    return await model.findByPk(pk);
  

  };
  
  export default getItemByPK;
  