const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:I2QDU7mPLyvuRR5n@kanban-cluster.dzwrwiu.mongodb.net/?retryWrites=true&w=majority&appName=kanban-cluster/test",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
