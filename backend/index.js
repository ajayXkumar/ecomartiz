const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/Productmodel");
const cors = require("cors");
require('dotenv').config()

const port=process.env.PORT  ||8000;
app.use(express.json()); 
 app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect(process.env.MONGO_URI,
  {
    useNewUrlParser: true,
  }
);
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("connected");
});

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.post("/login", authRoutes.login);
app.post("/register",authRoutes.register);
app.get("/products",productRoutes.products)
app.post("/orders", orderRoutes.orders)

app.post("/newproduct", async (req, res) => {
  try {
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

app.listen(port, () => {
  console.log(`Server is listening on port 8000`);
});

