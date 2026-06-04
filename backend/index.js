require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { PositionsModel } = require('./model/PositionsModel');
const { HoldingsModel } = require('./model/HoldingsModel');
const { OrdersModel } = require('./model/OrdersModel');
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());


// ===================== SIGNUP =====================

app.post("/signup", async (req, res) => {

  const { name, email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    return res.send("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  res.send("Signup successful");

});


// ===================== LOGIN =====================

app.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.send("User not found");
  }

  const validPassword = await bcrypt.compare(
    password,
    user.password
  );

  if (!validPassword) {
    return res.send("Wrong password");
  }

  const token = jwt.sign(
    {
      email: user.email,
    },
    "SECRETKEY"
  );

  res.json({
    token,
    message: "Login successful",
  });

});


// ===================== ADD HOLDINGS =====================

// app.get('/addHoldings', async (req, res) => {

//   await HoldingsModel.deleteMany({});

//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   for (let item of tempHoldings) {

//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day, 
//       isLoss: item.isLoss,
//     });

//     await newHolding.save();
//   }

//   res.send('Holdings added to database');
// });


// ===================== ALL HOLDINGS =====================

app.get('/allHoldings', async (req, res) => {

  let allHoldings = await HoldingsModel.find({});

  res.json(allHoldings);

});


// ===================== ALL POSITIONS =====================

app.get('/allPositions', async (req, res) => {

  let allPositions = await PositionsModel.find({});

  res.json(allPositions);

});


// ===================== NEW ORDER =====================

app.post('/newOrder', async (req, res) => {

  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();

  res.send('Order added to database');

});


// ===================== SERVER =====================

app.listen(PORT, async () => {

  console.log('Server is running on port ' + PORT);

  await mongoose.connect(url);

  console.log('Connected to MongoDB');

});