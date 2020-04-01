require("dotenv").config();
module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    APOLLO_URI: process.env.APOLLO_URI,
  },
};
