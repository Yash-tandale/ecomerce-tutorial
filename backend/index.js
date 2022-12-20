const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");

//create server
app.listen(5000);

//middleware to parse data
app.use(express.json());
app.use(cors());

//post signup
app.post("/signup", async (req, res) => {
	let data = new User(req.body);
	let result = await data.save();
	result = result.toObject();
	delete result.password;
	res.send(result);
	console.log(result);
});

//post login
app.post("/login", async (req, res) => {
	if (req.body.email && req.body.password) {
		let user = await User.findOne(req.body).select("-password");
		if (user) {
			res.send(user);
		} else {
			res.send({ ERROR: "No user found..." });
		}
		console.log(user);
	} else {
		res.send({ ERROR: "Please fill all details" });
	}
});

//post add product
app.post("/add-product", async (req, res) => {
	let product = new Product(req.body);
	let result = await product.save();
	res.send(result);
});

//get product list
app.get("/products", async (req, res) => {
	let product = await Product.find();
	if (product.length > 0) {
		res.send(product);
	} else {
		res.send({ result: "No data found..." });
	}
});
