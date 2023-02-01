const mongoose = require("mongoose");
// eslint-disable-next-line import/no-extraneous-dependencies
const dotenv = require("dotenv");

mongoose.set("strictQuery", false);

dotenv.config();

module.exports = {
  dbconnect: () => {
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("database connected successfully");
      })
      .catch((error) => {
        console.log(`error occured${error}`);
      });
  },
};
