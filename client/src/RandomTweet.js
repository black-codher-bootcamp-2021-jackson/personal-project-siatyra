const RandomTweet = ( props ) => {

    const tweet = props.tweet;

    const handleClick = (e) => {
        window.location.reload(false);
      }

    return ( 
        <div className="randomtweet">
            <h2>random</h2>
            <p className="explainer-text">click the button for a new tweet</p>
       
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