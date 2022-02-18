const { default: axios } = require("axios");
const { response } = require("express");
const mongoose = require("mongoose");
const Profile = mongoose.model("profiles");


const config = {
  url: 'https://api.twitter.com/2/users/568545739/tweets?tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=5',
  headers: { 
    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAJaFYwEAAAAATcAKQ9UVnUH3YzdVqbaUe9cy144%3DwetUPFGUY6rafsx4oNGNRAy3uYE7CTA9EdWTrtvydVsGMNtqtq', 
    'Cookie': 'guest_id=v1%3A164501591572021451'
  }
};

const profileRoutes = (app) => {

  app.get(`/api/profile`, async (req, res) => {
    const profiles = await Profile.find();
    return res.status(200).send(profiles);
  });

  // async (req, res) => {
  // const latestTweets = await axios.get(config);
  // let tweetData = latestTweets.data;
  // console.log(tweetData);
  // }
  // 
  
  // app.get(`/api/twitter`, async (req, res) => {
  //   const latestTweets = await axios.get(config);

  //   const latestTweetsData = latestTweets.data;
  //   console.log(latestTweetsData)

  //   return res.status(200).send(latestTweetsData);
  // });

  app.post(`/api/profile`, async (req, res) => {
    const profile = await Profile.create(req.body);

    return res.status(201).send({
      error: false,
      profile,
    });
  });

  app.put(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      profile,
    });
  });

  app.delete(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      profile,
    });
  });


};

module.exports = profileRoutes;
