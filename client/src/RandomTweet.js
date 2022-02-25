const RandomTweet = ( props ) => {

    const tweet = props.tweet;

    const handleClick = (e) => {
        window.location.reload(false);
      }

    return ( 
        <div className="randomtweet">
            <h2>random</h2>
            <h4 className="explainer-text">click the button for a new tweet</h4>
       
        <div className="tweet-container">
          <div id="tweet">
            {tweet}
          </div>
        </div>
               <div className="new_tweet">
               <button onClick={(e) => handleClick(e)}>beep boop clicky</button>
             </div>

             </div>
     );
}
 
export default RandomTweet;