const LiveTweet = ( props ) => {

    const liveTweet = props.liveTweet;

    return ( 
        <div className="livetweet-container">
        <div id="livetweet">
            <h3> Latest news:</h3>
          {liveTweet}
        </div>
        </div>
     );
};
 
export default LiveTweet;