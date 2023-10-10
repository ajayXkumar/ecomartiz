const express = require('express');
const router = express.Router();
const Order = require('../models/ordermodel'); 

const orders= (req, res) => {
    Order.create(req.body)
      .then((result) => {
        console.log('Order placed:', result);
        res.status(201).json(result); 
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  };

module.exports={orders};