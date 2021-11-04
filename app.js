import { database } from "./database/db.js";
import { User } from "./database/user.js";
import { Card } from "./database/card.js";

async function createUser(username, cpf, email, password) {
  try {
    await database.authenticate();
    database.sync({ alter: true });

    // Create users
    await User.create({
      username: username,
      cpf: cpf,
      email: email,
      password: password,
    });
    console.log("Conexão realizada");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

async function createCard(creationDate, quantity, fk_userId) {
  try {
    await database.authenticate();
    database.sync({ alter: true });

    // Create users
    await Card.create({
      creationDate: creationDate,
      quantity: quantity,
      fk_userId: fk_userId,
    });
    console.log("Conexão realizada");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
