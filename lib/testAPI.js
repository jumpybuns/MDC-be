const express = require('express');
const router = express.Router();
const axios = require('axios');
const Website_URL = 'https://testing-c7k3525.slack.com/';
const Website = 'Slack';

router.get('/getUser', async function (req, res, next) {
  axios
    .get('/getUser')
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  // await axios.post(
  //   `https://hooks.slack.com/services/${process.env.SLACK_API_KEY}`,
  //   {
  //     blocks: [
  //       {
  //         type: 'section',
  //         text: {
  //           type: 'mrkdwn',
  //           text: `Alert! Alert! Ethan is now a fucking badass`,
  //         },
  //       },
  //     ],
  //   }
  // );
});

module.exports = router;
