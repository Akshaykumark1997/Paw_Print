const jwt = require('jsonwebtoken');

module.exports = {
  verify: (data) => {
    if (!data) {
      return false;
    }
    try {
      const decoded = jwt.verify(data.split(' ')[1], process.env.SECRET);
      console.log(decoded);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};
