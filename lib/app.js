const axios = require('axios');
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async function (req, res, next) {
  const symbol = 'SHOP';
  const result = await axios.get(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.API_KEY}`
  );
  const lastRefreshed = result.data['Meta Data']['3. Last Refreshed'];
  const lastClose =
    result.data['Time Series (Daily)'][lastRefreshed]['4. close'];

  console.log(lastClose);

  await axios.post(
    `https://hooks.slack.com/services/${process.env.SLACK_API_KEY}`,
    {
      text: lastClose,
    }
  );
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
