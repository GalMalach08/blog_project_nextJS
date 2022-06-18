import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose
    .connect(
      `mongodb+srv://galmalach:1233212@cluster0.aa6nqor.mongodb.net/blog?retryWrites=true&w=majority`,
      {
        dbName: "blog",
      }
    )
    .then(() => console.log(`mongodb connected!`));

  return handler(req, res);
};

export default connectDB;
