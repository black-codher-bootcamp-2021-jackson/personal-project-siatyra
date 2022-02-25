
const { default: axios } = require("axios");
const { response } = require("express");


const config = {
    headers: { 
      'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAJaFYwEAAAAATcAKQ9UVnUH3YzdVqbaUe9cy144%3DwetUPFGUY6rafsx4oNGNRAy3uYE7CTA9EdWTrtvydVsGMNtqtq', 
      'Cookie': 'guest_id=v1%3A164501591572021451'
    }
  };


const twitterRoutes = (app) => {

 app.get(`/api/twitter`, async (req, res) => {
    const latestTweets = await axios.get('https://api.twitter.com/2/users/568545739/tweets?tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=5', config);
    const latestTweetsData = latestTweets.data;
    console.log(latestTweetsData)

    return res.status(200).send(latestTweetsData);
  });

};

module.exports = twitterRoutes;