const app = require("./app");
const db = require("./config/database");

const NODE_ENV = process.env.NODE_ENV || "development";

const PORT = NODE_ENV === "development" ? 3000 : process.env.SERVER_PORT;

db.connectToMongoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(
      "Failed to connect to MongoDB and start server:",
      err.message
    );
  });
