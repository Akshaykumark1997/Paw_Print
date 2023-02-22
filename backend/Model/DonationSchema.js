const mongoose = require('mongoose');

const { Schema } = mongoose;

const DonationSchema = new Schema(
  {
    petName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    vaccinated: {
      type: String,
      required: true,
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
  },
  {
    timestamps: true,
  }
);

const donation = mongoose.model('donation', DonationSchema);
module.exports = donation;
