const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  products: [
    {
      name: {
        type: String,
      },
      slug: {
        type: String,
      },
      category: {
        type: String,
      },
      image: {
        type: String,
        required: true,
        default: '/images/default.jpg',
      },
      price: {
        type: Number,
        required: true,
        default: 0,
      }
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
