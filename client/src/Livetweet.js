const LiveTweet = ( props ) => {

    const liveTweet = props.liveTweet;

    return ( 
        <div className="livetweet-container">
        <div id="livetweet">
            <h2> latest news</h2>
          {liveTweet}
        </div>
        </div>
     );
};
 
export default LiveTweet;