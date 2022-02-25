const TweetList = (props) => {

  const profiles = props.profiles;
  const renderTweet = props.renderTweet;


    return ( 
        <div className="tweetlist">
          <h2>library</h2>
          <h4>all tweets from the database</h4>
        <ul>
        {profiles && profiles.length > 0 ? (
          profiles.map((profile) => renderTweet(profile))
        ) : (
          <p>No tweets found</p>
        )}
      </ul> 
      </div> );
}
 
export default TweetList;