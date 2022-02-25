const LiveTweet = ( props ) => {

    const newTweet = props.newTweet;
    const renderTweet = props.renderTweet;

    return ( 
        <div className="livetweet-container">
        <div id="livetweet">
            <h2>latest news</h2>
            <ul>
        {newTweet && newTweet.length > 0 ? (
          newTweet.map((tweet) => renderTweet(tweet))
        ) : (
          <p>No tweets found</p>
        )}
      </ul>
        </div>
        </div>
     );
};
 
export default LiveTweet;