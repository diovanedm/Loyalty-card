import { database } from "./db.js";
import pkg from "sequelize";
const { DataTypes } = pkg;

const User = database.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(140),
    allowNull: false,
  },
  cpf: {
    unique: true,
    type: DataTypes.STRING(11),
    allowNull: false,
  },
  email: {
    // must be unique
    unique: true,
    type: DataTypes.STRING(140),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(140),
    allowNull: false,
  },
});

export { User };
