const LiveTweet = (props) => {
  const newTweet = props.newTweet;
  const renderTweet = props.renderTweet;

  const renderNewTweet = newTweet.map((tweet) => renderTweet(tweet))
  const returnEmptyMessage = <p>No tweets found</p>

  return ( 
    <div className="livetweet-container">
      <div id="livetweet">
        <h2>latest news</h2>
        <ul>
          { newTweet && newTweet.length > 0 ? renderNewTweet : returnEmptyMessage }
        </ul>
      </div>
    </div>
  );
};
 
export default LiveTweet;
