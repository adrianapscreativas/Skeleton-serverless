/**
 * Keep this file in sync with the code in the "Usage without strict types for
 * attributes" section in /docs/manual/other-topics/typescript.md
 *
 * Don't include this comment in the md file.
 */
import { Model, DataTypes } from "sequelize";

import sequelizeClient from "../sequelizeClient";

class TodoModel extends Model {
  declare id: string;
  declare name: string;
  declare description: string;

}

TodoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.TEXT,
      allowNull: true,
    },
 
  },
  { paranoid:true,
    timestamps: true,
    tableName: "Todos",
    sequelize: sequelizeClient(),
  }
);

export default TodoModel;
