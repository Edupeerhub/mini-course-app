const app = require("./app");
const db = require("./config/database");

const PORT = process.env.SERVER_PORT || 3000;

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
