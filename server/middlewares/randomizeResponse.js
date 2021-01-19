const { randomize } = require('../utils');

module.exports = (_, res, next) => {
  if (!randomize()) {
    return res.status(503).send({
      message: 'error',
      error: 'Ooops something went wrong...',
    });
  }

  next();
};
