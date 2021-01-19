const {
  MIN_REQUEST_DELAY,
  MAX_ADDED_REQUEST_DELAY,
} = require('../config/index');

module.exports = (_, _1, next) => {
  setTimeout(() => {
    next();
  }, MIN_REQUEST_DELAY + Math.random() * MAX_ADDED_REQUEST_DELAY);
};
