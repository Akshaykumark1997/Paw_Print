const jwt = require('jsonwebtoken');
const Adoption = require('../Model/AdoptionSchema');

module.exports = {
  applications: (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
    Adoption.find({ donatedUserId: decoded.id })
      .then((applications) => {
        res.json({
          success: true,
          applications,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  applicationStatus: (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
    Adoption.find({ accepterUserId: decoded.id })
      .then((applications) => {
        res.json({
          success: true,
          applications,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  changeAdoptionStatus: (req, res) => {
    Adoption.updateOne(
      { _id: req.params.id },
      {
        $set: {
          adoptionStatus: 'Confirmed',
        },
      }
    )
      .then(() => {
        res.json({
          success: true,
          message: 'confirmed successfully',
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
};
