const jwt = require('jsonwebtoken');

module.exports = {
  verify: (data) => {
    if (!data) {
      return false;
    }
    try {
      jwt.verify(data.split(' ')[1], process.env.SECRET);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};
