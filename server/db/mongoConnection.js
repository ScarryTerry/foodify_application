const mongoose = require("mongoose");

// eslint-disable-next-line no-undef
const { MONGO_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((err) => {
      console.log("Database connection failed");
      console.error(err);
      // eslint-disable-next-line no-undef
      process.exit(1);
    });
};