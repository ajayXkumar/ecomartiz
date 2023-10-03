const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path');

const Product = require("./models/Productmodel");

const cors = require("cors");
const User = require("./models/usermodel");

app.use(express.json()); // for JSON requests
 app.use(express.urlencoded({ extended: true }));
app.use(cors());


mongoose.connect(
  "mongodb+srv://ajxvanced:ajaykumar@cluster0.aadzezq.mongodb.net/ECOMMERCE?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("connected");
});

app.post("/login", (req, res) => {
  
  const { email, password } = req.body;
  console.log(`${email}`);
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ error: "User not found. Please register." });
      }

      if (user.password === password) {
        res.json({ message: "Login successful" });
      } else {
        res.status(401).json({ error: "Wrong password" });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.post("/newproduct", async (req, res) => {
  try {
    // Extract data from req.body
    const { name, category, image, price } = req.body;
    console.log("Received data:", req.body);

    const newProduct = await Product.create({
      name: name,
      slug:name,
      category: category,
      image: image,
      price: price,

    });

    res.json("New product created successfully.");
  } catch (error) {
    
    console.error("Error creating a new product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.listen(8000, () => {
  console.log(`Server is listening on port 8000`);
});

