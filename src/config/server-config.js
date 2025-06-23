module.exports = {
  ServerConfig: require("./server-config"),
};
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000, // Add a default port
};
