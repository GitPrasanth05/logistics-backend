import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URL}/${DB_NAME}`
    );
    console.log(
      ` \n DB is connected successfully at Db Host:  ${connectionInstance.connection.host} `
    );
  } catch (error) {
    console.log("mongoose connectivity error");
    process.exit(1);
  }
};

export default ConnectDB;
