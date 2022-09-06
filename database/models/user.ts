/**
 * Keep this file in sync with the code in the "Usage without strict types for
 * attributes" section in /docs/manual/other-topics/typescript.md
 *
 * Don't include this comment in the md file.
 */
import { Model, DataTypes } from "sequelize";

import sequelizeConecction from "../sequelizeClient";

class User extends Model {
  declare id: string;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare password: string
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    lastName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    password:{
      type: new DataTypes.STRING,
      allowNull: true
    }
  },
  { paranoid:true,
    timestamps: true,
    tableName: "Users",
    sequelize: sequelizeConecction, // passing the `sequelize` instance is required
  }
);

export default User;
