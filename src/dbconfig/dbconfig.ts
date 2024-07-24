import mongoose from "mongoose";

//in next.js we have to connect to the database everytime we call an api
export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connection successful");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error. Error : " + err);
      process.exit();
    });
  } catch (error) {
    console.log("Error connection Database");
    console.log(error);
  }
}
