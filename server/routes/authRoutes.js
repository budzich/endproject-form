const { nanoid } = require('nanoid');

const addDelay = require('../middlewares/addDelay');
const randomizeResponse = require('../middlewares/randomizeResponse');

module.exports = (app) => {
  app.post('/signup', addDelay, randomizeResponse, (req, res) => {
    try {
      const { email, name } = req.body;
      const MOCK_USER_ID = nanoid();

      res.status(201).send({
        message: 'User successfully created',
        data: {
          _id: MOCK_USER_ID,
          email,
          name,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  });
};
