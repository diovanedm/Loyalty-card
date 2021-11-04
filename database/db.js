// connect to the database using sequelize
import Sequelize from "sequelize";

const database = new Sequelize("belasacai", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export { database };
