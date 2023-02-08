const mongoose = require('mongoose');

const { Schema } = mongoose;

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  standardPrice: {
    type: Number,
    required: true,
  },
  premiumPrice: {
    type: Number,
    reqiured: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
});

const service = mongoose.model('services', ServiceSchema);
module.exports = service;
