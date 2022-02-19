const TweetList = (props) => {

  const profiles = props.profiles;
  const renderTweet = props.renderTweet;


    return ( 
        <div className="tweetlist">
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