const axios = require('axios');
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const testAPIRouter = require('./testAPI.js');

app.use(express.json());
app.use(cors());

app.use('/getUser', testAPIRouter);
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
