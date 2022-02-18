const {TwitterApi} = require('twitter-api-v2');

const client = new TwitterApi({
consumerKey: consumerKey,
consumerSecret: 'lPiIfXPiHtn9uFDhtFdBajuJfiNW00LVyu0Qmqyfb82M7YXyZW',
accessToken: '578281393-NGprVlRTl1OiEvC6hBOwfAAXab6ft6764wyVKD5f',
accessSecret: '8fo5CNchmE9ZCuNjcIwZXW5G2SBM7aw5DvNuyjqjH1Uym',

});



// client.v2.singleTweet('https://api.twitter.com/2/users/568545739/tweets?tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=5', {

//   }).then((val) => {
//     console.log(val)
// }).catch((err) => {
//     console.log(err)
// })

// auth = tw.OAuthHandler(consumer_key, consumer_secret)
// auth.set_access_token(access_token, access_token_secret)
// api = tw.API(auth, wait_on_rate_limit=True)

// user_id = 568545739

// statuses = api.user_timeline(DojaCat)

// print(str(len(statuses))) + "number."