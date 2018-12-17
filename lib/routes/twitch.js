/*eslint-disable-next-line*/
const router = require('express').Router();
const request = require('superagent');


router.get('/', (req, res) => {
  request.get('https://api.twitch.tv/kraken/streams/?first=20&client_id=8sb2kt99biht5q3k79k7hsejyj0q2y')
    .then(response => {
      const twitchResults = response.body.streams.map(stream => {
        return {
          name: stream.game,
          views: stream.viewers,
          streamType: stream.stream_type
        };
      });
      res.json(twitchResults);
    });
});

module.exports = router;