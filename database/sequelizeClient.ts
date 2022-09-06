import  {Sequelize}  from 'sequelize';
import getConfiguration from './configVariables/configVariables';

const {databaseName, databaseUser, databasePassword, databaseHost,databaseDialect,databasePort} = getConfiguration();

/**
 * Create a new instance for the database connection.
 */
// const sequelizeClient = new Sequelize(databaseName, databaseUser, databasePassword, {
//   host: databaseHost,
//   dialect: 'mysql',
// });


const sequelizeConecction = new Sequelize(`${databaseDialect}://${databaseUser}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}`);

 

export default sequelizeConecction;
