import User from "@lib/dto/models/user";
import compression from "compression";
import express, { Express } from "express";
import { DataSource } from "typeorm";
import mysql from "mysql"

export const foundations = async (app: Express) => {
  // const AppDataSource = new DataSource({
  //   type: "mysql", // Database type (e.g., 'mysql', 'postgres')
  //   host: "localhost",
  //   port: 3306, // Default MySQL port
  //   username: "root",
  //   password: "43902494",
  //   database: "chat_app",
  //   synchronize: true, // Automatically create/update tables (not recommended for production)
  //   logging: true, // Enable query logging
  //   entities: ["./lib/dto/models/*.ts"], // Path to your entity files
  //   extra: {
  //     createDatabaseIfNotExist: true, // Automatically creates the database
  //   },
  // });

  //   AppDataSource.initialize()
  //     .then(async () => {
  //       console.log("Data Source has been initialized!");
  //       const userRepository = AppDataSource.getRepository(User);
  //     })
  //     .catch((error) => {
  //       console.error("Error during Data Source initialization:", error);
  //     });


  const connection = mysql.createConnection({
    host: 'localhost',        // Hostname
    user: 'root',             // Database username
    password: '43902494', // Database password
    database: 'chat_app',      // Database name
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL!');
  });

  app.set(
    "trust proxy",
    process.env.SERVER_MODE === "http" && process.env.NODE_ENV === "production"
  );
  app.use(compression());
  app.use(express.json({ limit: "100mb" }));
  app.use(express.urlencoded({ limit: "100mb", extended: true }));
};

// export const foundations = (app: Express) => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       serverSelectionTimeoutMS: 5000,
//     })
//     .then(
//       () => {
//         console.info("⚡ Database connected. ⚡");
//       },
//       (error) => {
//         console.error(
//           `🚨 Failed to connect to database with error: ${error}. 🚨`
//         );
//       }
//     );
//   app.set(
//     "trust proxy",
//     process.env.SERVER_MODE === "http" && process.env.NODE_ENV === "production"
//   );
//   app.use(compression());
//   app.use(express.json({ limit: "100mb" }));
//   app.use(express.urlencoded({ limit: "100mb", extended: true }));
// };
