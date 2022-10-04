const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/user.model");
const Point = require("./model/Vote");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");
const Poll = require("./model/poll");

bodyParser.urlencoded({ extended: true });
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
// -------------AUTHETICATION

function verifyJWT(req, res, next) {
  const authorization = req.headers["authorization"];

  if (!authorization) {
    return res.status(401).json({ error: "you must be logged in 1" });
  }

  const token = authorization && authorization.split(" ")[1];

  jwt.verify(token, "secret123", (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "you must be logged in 2" });
    }
    console.log("payload", payload);
    const { id } = payload;
    console.log("id: ", id);
    User.findById(id).then((userData) => {
      // res.json(payload);
      req.user = userData.registerId;
      next();
    });
  });
  //////////////////////////////////////
  // const token = req.headers["x-access-token"];
  // if (!token) {
  //   res.json("we need token");
  // } else {
  //   jwt.verify(token, "secret123", (err, decoded) => {
  //     if (err) {
  //       res.json("faild to authenticate");
  //       console.log(err)
  //     } else {
  //       res.json(decoded)
  //       req.userId = decoded.id;
  //       next();

  //     }
  //   });
  // }
}

// -------------USER

app.get("/api/users", async (req, res) => {
  await User.find()
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  const { registerId, number, password } = req.body;
  if (!registerId || !number || !password) {
    res.json({ error: "Somthing missing" });
  }
  try {
    await User.create({
      registerId,
      number,
      password,
    });

    res.json({ status: "ok", message: "Added successfully" });
  } catch (err) {
    res.json({ status: "error", error: "Dublicate number" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    registerId: req.body.registerId,
    password: req.body.password,
  });
  if (user) {
    console.log(user._id);
    const token = jwt.sign({ id: user._id }, "secret123");
    return res.json({ status: "ok", user: token, voter: user.registerId });
  } else {
    return res.json({ status: "error", user: false });
  }
});

// -------------VOTE

app.get("/api/getpoints", async (req, res) => {
  await Point.find()
    .then((point) => res.json(point))
    .catch((err) => res.json(err));
});

app.get("/api/getleader", async (req, res) => {
  await Point.findOne({
    id: req.body._id,
  })
    .then((leader) => res.json("leader", leader))
    .catch((err) => res.json("err", err));
});

app.get("/api/getpolls", async (req, res) => {
  await Poll.find()
    .then((polls) => res.json(polls))
    .catch((err) => res.json(err));
});

app.post("/api/poll", (req, res) => {
  const { leadername, voter } = req.body;
  const poll = new Poll({
    leadername,
    voter,
  });

  poll
    .save()
    .then(() => res.json({ message: "Vote added" }))
    .catch((err) => res.json(err));
});

app.post("/api/updatepoll", (req, res) => {
  res.set("Access-Control-Allow-Original", "*");
  const { id, point } = req.body;

  Point.findByIdAndUpdate(id, { $set: { point: point } }, (err, doc) => {
    if (doc) return res.json(doc);
    if (err) return console.log(err);
  });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/voting-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB connected DB name 'voting-app'"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`server on port ${PORT}`));
