const { REJECT_PERCENTAGE } = require('../config');

exports.randomize = () => Math.ceil(Math.random() * 100) > REJECT_PERCENTAGE;
