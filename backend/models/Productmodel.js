const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
    unique:true,
    default: '', 
  },
  slug: {
    type: String,
    required: true, 
    default: '', 
  },
  category: {
    type: String,
    required: true,
    default: '', 
  },
  image: {
    type: String,
    required: true, // You can set this to true if image is required
    default: '/images/default.jpg', // You can set a default image path if needed
  },
  price: {
    type: Number,
    required: true, // You can set this to true if price is required
    default: 0, // You can set a default value if needed
  },
  countInStock: {
    type: Number,
    //required: true, // You can set this to true if countInStock is required
    default: 0, // You can set a default value if needed
  },
  brand: {
    type: String,
   // required: true, // You can set this to true if brand is required
    default: '', // You can set a default value if needed
  },
  rating: {
    type: Number,
   // required: true, // You can set this to true if rating is required
    default: 0, // You can set a default value if needed
  },
  numReviews: {
    type: Number,
    //required: true, // You can set this to true if numReviews is required
    default: 0, // You can set a default value if needed
  },
  description: {
    type: String,
   // required: true, // You can set this to true if description is required
    default: '', // You can set a default value if needed
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
