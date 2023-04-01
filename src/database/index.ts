import { createConnection } from "typeorm";

createConnection()
    .then(() => console.log("Database connected!"))
    .catch((error) => console.log("Error connecting to database: ", error));
