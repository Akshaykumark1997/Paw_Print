/* eslint-disable consistent-return */
const Service = require('../Model/ServiceSchema');
const validateService = require('../Validation/Service');

module.exports = {
  services: (req, res) => {
    Service.find({})
      .then((services) => {
        res.json({
          success: true,
          services,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  serviceDetails: (req, res) => {
    Service.findOne({ _id: req.params.id })
      .then((service) => {
        res.json({
          success: true,
          service,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          error,
        });
      });
  },
  addService: (req, res) => {
    const { errors, isValid } = validateService(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Service.create({
      name: req.body.name,
      standardPrice: req.body.standard,
      premiumPrice: req.body.premium,
      description: req.body.description,
      image: {
        name: req.file.filename,
        path: req.file.path,
      },
    }).then(() => {
      res.json({
        success: true,
        message: 'service added successfully',
      });
    });
  },
  getServices: (req, res) => {
    Service.find({}).then((services) => {
      res.json({
        success: true,
        services,
      });
    });
  },
  editService: (req, res) => {
    Service.findOne({ _id: req.params.id }).then((service) => {
      res.json({
        service,
      });
    });
  },
  editServicePost: (req, res) => {
    if (!req.file) {
      Service.find({
        _id: req.body.id,
      })
        .then((service) => {
          Service.updateOne(
            { _id: req.body.id },
            {
              $set: {
                name: req.body.name,
                standardPrice: req.body.standardPrice,
                premiumPrice: req.body.premiumPrice,
                description: req.body.description,
                'image.name': service.name,
                'image.path': service.path,
              },
            }
          )
            .then(() => {
              res.json({
                sucess: true,
                message: 'updated successfully',
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
      Service.updateOne(
        { _id: req.body.id },
        {
          $set: {
            name: req.body.name,
            standardPrice: req.body.standardPrice,
            premiumPrice: req.body.premiumPrice,
            description: req.body.description,
            'image.name': req.file.filename,
            'image.path': req.file.path,
          },
        }
      )
        .then(() => {
          res.json({
            sucess: true,
            message: 'updated successfully',
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
  deleteService: (req, res) => {
    Service.deleteOne({
      _id: req.params.id,
    })
      .then(() => {
        res.json({
          success: true,
          message: 'deleted successfully',
        });
      })
      .catch(() => {
        res.json({
          sucess: false,
          message: 'error occures',
        });
      });
  },
};
