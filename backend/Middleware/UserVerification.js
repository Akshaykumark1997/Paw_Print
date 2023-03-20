/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const User = require('../Model/UserSchema');

module.exports = {
  verify: (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).send({
        token: false,
        message: 'No taken provided',
      });
    }
    try {
      const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
      if (decoded) {
        User.findOne({ _id: decoded.id }).then((user) => {
          if (user.blocked) {
            return res.status(400).send({
              blocked: true,
              message: 'You have been blocked',
            });
          }
          next();
        });
      } else {
        return res.status(400).send({
          token: false,
          message: 'invalid token',
        });
      }
    } catch (error) {
      return res.status(400).send({
        token: false,
        message: 'invalid token',
      });
    }
  },
};
