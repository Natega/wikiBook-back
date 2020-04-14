import mongoose from "mongoose";
export default async (): Promise<any> => {
  const url = `mongodb://${process.env.mongo_user}:${process.env.mongo_pwd}@localhost:${process.env.mongo_port}/admin`;
  const connection = await mongoose.connect(url, {
    useUnifiedTopology: true,
  });
  return connection.connection.db;
};
