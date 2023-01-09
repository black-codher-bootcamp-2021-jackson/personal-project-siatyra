const TweetList = (initialTweets) => {
  const profiles = initialTweets.profiles;
  const renderTweet = initialTweets.renderTweet;

  const renderExistingTweet = profiles.map((profile) => renderTweet(profile))
  const returnEmptyMessage = <p>No tweets found</p>
  
  return ( 
    <div className="tweetlist">
      <h2>library</h2>
      <h4>all tweets from the database</h4>
      <ul>
        { profiles && profiles.length > 0 ? renderExistingTweet : returnEmptyMessage }
      </ul>
    </div> 
  );
}
 
export default TweetList;