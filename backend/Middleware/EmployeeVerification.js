/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

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
      if (decoded) next();
      else {
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
