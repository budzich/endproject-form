const {nanoid} = require('nanoid');

const addDelay = require('../middlewares/addDelay');
const randomizeResponse = require('../middlewares/randomizeResponse');
const users = [];

module.exports = (app) => {
  app.post('/post', randomizeResponse, (req, res) => {
    try {
      users.push(req.body);
      res.send({id: users.length - 1});
    } catch (error) {
      throw new Error(error);
    }
  });

  app.get('/post/:id', addDelay, randomizeResponse, (req, res) => {
    try {
      res.send(users[req.params.id]);
    } catch (error) {
      throw new Error(error);
    }
  });
};
