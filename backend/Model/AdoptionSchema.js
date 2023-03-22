const mongoose = require('mongoose');

const { Schema } = mongoose;

const AdoptionShcema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    houseName: {
      type: String,
      required: true,
    },
    streetName: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      requied: true,
    },
    country: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      requied: true,
    },
    petName: {
      type: String,
      required: true,
    },
    pet: { type: String },
    breed: { type: String },
    description: { type: String },
    donatedUserId: {
      type: String,
      required: true,
    },
    accepterUserId: {
      type: String,
      requied: true,
    },
    petId: {
      type: String,
      required: true,
    },
    adoptionStatus: {
      type: String,
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

const adoption = mongoose.model('adoption', AdoptionShcema);
module.exports = adoption;
