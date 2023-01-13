const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const cors = require('cors');
const dotenv = require("dotenv")
dotenv.config()

const app = express();
app.use(cors());
app.use(bodyParser.json());

const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.listen(5000, async () => {
  console.log('Server listening on port ' + 5000);
  // await db.sequelize.sync({ force: true });
  await db.sequelize.sync();
   console.log('connected to db');
}); // start Node + Express server on port 5000