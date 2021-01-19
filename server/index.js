const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

require('./routes/authRoutes')(app);

// app.use('*', (req, res) => {
//   res.send({
//     message: "Hi",
//   });
// });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    '\x1b[33m%s\x1b[0m',
    `[SERVER] Server is listening at http://localhost:${PORT}`,
  );
});
