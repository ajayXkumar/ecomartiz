const express = require('express');
const router = express.Router();
const User = require('../models/usermodel'); 

const login=(req, res) => {
    const { email, password } = req.body;
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
  };
  
const register=(req, res) => {
    const email = req.body.email;
    User
      .findOne({ email })
      .then((existingEmployee) => {
        if (existingEmployee) {
          return res.json({ message: "User is already registered" });
        } else {
          User
            .create(req.body)
            .then((newUser) => res.json(newUser))
            .catch((err) => res.json(err));
        }
      })
      .catch((err) => res.json(err));
  };
  
  
module.exports = {login ,register};
