const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentsRoutes = require("./students");

const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());

server.use("/students", studentsRoutes);

mongoose
  .connect(process.env.uri || uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    server.listen(port || 3000, () => {
      console.log(`working on port${port}`);
    })
  );
mongoose.connection.on("connected", () => {
  console.log("connected to atlas");
});
