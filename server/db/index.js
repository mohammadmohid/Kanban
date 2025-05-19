const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:12345678$$@kanban-cluster.dzwrwiu.mongodb.net/?retryWrites=true&w=majority&appName=kanban-cluster",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
