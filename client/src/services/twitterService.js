import axios from "axios";

const getNewTweets = async () => {
  let twitterResponse = await axios.get(`/api/twitter`);
  let tweetResponseData = twitterResponse.data;
  return tweetResponseData || [];
}

  export { getNewTweets };
