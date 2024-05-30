const express = require("express");
const bodyParser = require("body-parser");
const userService = require("./src/controllers/UserController");
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'localhost',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type'
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.get("/users", async function (req, res) {
  try {
    const data = await userService.getAllUsers();
    res.status(200).send({ data, message: "Success!!" });
  } catch (error) {
    res.status(500).send({ message: "Something went Wrong!!", error });
  }
});

app.get("/users/:id", async function (req, res) {
  try {
    const data = await userService.getUserById(req);
    if (data.code == "P2025") {
      res.status(412).send({ message: "User not Found!!" });
    } else {
      res.status(200).send({ data, message: "Success!!" });
    }
  } catch (error) {
    res.status(500).send({ message: "Something went Wrong!!", error });
  }
});

app.post("/users", async function (req, res) {
  try {
    const data = await userService.createUser(req);
    res.status(200).send({ data, message: "Success!!" });
  } catch (error) {
    res.status(500).send({ message: "Something went Wrong!!", error });
  }
});

app.put("/users/:id", async function (req, res) {
  try {
    const data = await userService.updateUser(req);
    res.status(200).send({ data, message: "Success!!" });
  } catch (error) {
    res.status(500).send({ message: "Something went Wrong!!", error });
  }
});

app.delete("/users/:id", async function (req, res) {
  try {
    const data = userService.deleteUser(req);
    res.status(200).send({ data, message: "Success!!" });
  } catch (error) {
    res.status(500).send({ message: "Something went Wrong!!", error });
  }
});

app.listen(3000);
