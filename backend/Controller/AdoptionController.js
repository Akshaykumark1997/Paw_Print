/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const validateAdoption = require('../Validation/Adoption');
const Adoption = require('../Model/AdoptionSchema');
const Donation = require('../Model/DonationSchema');
const validateDonation = require('../Validation/Donation');

module.exports = {
  adoption: (req, res) => {
    const { errors, isValid } = validateAdoption(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
    Adoption.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mobile: req.body.mobile,
      email: req.body.email,
      houseName: req.body.houseName,
      streetName: req.body.streetName,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      pincode: req.body.pincode,
      petName: req.body.petName,
      pet: req.body.pet,
      breed: req.body.breed,
      description: req.body.description,
      petId: req.body.petId,
      donatedUserId: req.body.userId,
      accepterUserId: decoded.id,
    })
      .then(() => {
        res.json({
          success: true,
          message: 'Application sent successfully',
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  getAdoption: (req, res) => {
    Donation.find({})
      .sort({ _id: -1 })
      .then((donations) => {
        res.json({
          success: true,
          donations,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  getEditAdoption: (req, res) => {
    Donation.findOne({ _id: req.params.id })
      .then((donation) => {
        res.json({
          success: true,
          donation,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  editAdoption: (req, res) => {
    if (!req.file) {
      Donation.findOne({ _id: req.body.id })
        .then((donation) => {
          Donation.updateOne(
            { _id: req.body.id },
            {
              $set: {
                petName: req.body.petName,
                age: req.body.age,
                breed: req.body.breed,
                vaccinated: req.body.vaccinated,
                description: req.body.description,
                userId: req.body.userId,
                'image.name': donation.image.name,
                'image.path': donation.image.path,
              },
            }
          )
            .then(() => {
              res.json({
                success: true,
                message: 'Updated successfully',
              });
            })
            .catch((error) => {
              res.status(400).json({
                success: false,
                error,
              });
            });
        })
        .catch((error) => {
          res.status(400).json({
            success: false,
            error,
          });
        });
    } else {
      Donation.updateOne(
        { _id: req.body.id },
        {
          $set: {
            petName: req.body.petName,
            age: req.body.age,
            breed: req.body.breed,
            vaccinated: req.body.vaccinated,
            description: req.body.description,
            userId: req.body.userId,
            'image.name': req.file.filename,
            'image.path': req.file.path,
          },
        }
      )
        .then(() => {
          res.json({
            success: true,
            message: 'Updated successfully',
          });
        })
        .catch((error) => {
          res.status(400).json({
            success: false,
            error,
          });
        });
    }
  },
  deleteAdoption: (req, res) => {
    Donation.deleteOne({ _id: req.params.id })
      .then(() => {
        res.json({
          success: true,
          message: 'Deleted Successfully',
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  donate: (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
    const { errors, isValid } = validateDonation(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Donation.create({
      petName: req.body.petName,
      age: req.body.age,
      breed: req.body.breed,
      vaccinated: req.body.vaccinated,
      description: req.body.description,
      userId: decoded.id,
      image: {
        name: req.file.filename,
        path: req.file.path,
      },
    })
      .then((donation) => {
        res.json({
          success: true,
          message: 'pet added successfully',
          donation,
        });
      })
      .catch((error) => {
        res.json({
          success: false,
          error,
        });
      });
  },
  getPets: (req, res) => {
    Donation.find({})
      .then((donations) => {
        res.json({
          success: true,
          donations,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  petDetails: (req, res) => {
    Donation.findOne({ _id: req.params.id })
      .then((petDetails) => {
        res.json({
          success: true,
          petDetails,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  donatedPets: (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
    Donation.find({ userId: decoded.id })
      .then((donatedPets) => {
        res.json({
          success: true,
          donatedPets,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  editDonatedPetDetails: (req, res) => {
    Donation.findOne({ _id: req.params.id })
      .then((donation) => {
        res.json({
          success: true,
          donation,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  editDonatedPet: (req, res) => {
    if (!req.file) {
      Donation.findOne({ _id: req.body.id })
        .then((donation) => {
          Donation.updateOne(
            { _id: req.body.id },
            {
              $set: {
                petName: req.body.petName,
                age: req.body.age,
                breed: req.body.breed,
                vaccinated: req.body.vaccinated,
                description: req.body.description,
                userId: req.body.userId,
                'image.name': donation.image.name,
                'image.path': donation.image.path,
              },
            }
          )
            .then(() => {
              res.json({
                success: true,
                message: 'Updated successfully',
              });
            })
            .catch((error) => {
              res.status(400).json({
                success: false,
                error,
              });
            });
        })
        .catch((error) => {
          res.status(400).json({
            success: false,
            error,
          });
        });
    } else {
      Donation.updateOne(
        { _id: req.body.id },
        {
          $set: {
            petName: req.body.petName,
            age: req.body.age,
            breed: req.body.breed,
            vaccinated: req.body.vaccinated,
            description: req.body.description,
            userId: req.body.userId,
            'image.name': req.file.filename,
            'image.path': req.file.path,
          },
        }
      )
        .then(() => {
          res.json({
            success: true,
            message: 'Updated successfully',
          });
        })
        .catch((error) => {
          res.status(400).json({
            success: false,
            error,
          });
        });
    }
  },
};
