
const { default: axios } = require("axios");

const lastFiveTweetsUrl = 'https://api.twitter.com/2/users/568545739/tweets?tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=5'

const config = {
    headers: { 
      'Authorization': process.env.TWITTER_BEARER_TOKEN
    }
};

const twitterRoutes = (app) => {

 app.get(`/api/twitter`, async (req, res) => {
    const latestTweets = await axios.get(lastFiveTweetsUrl, config);
    const latestTweetsData = latestTweets.data;

    return res.status(200).send(latestTweetsData);
  });

};

module.exports = twitterRoutes;