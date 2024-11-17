import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "todobackend",
    })
    .then((c) => {
      console.log(`database connected successfully with ${c.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
