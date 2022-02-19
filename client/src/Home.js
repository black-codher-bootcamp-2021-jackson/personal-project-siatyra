const Home = ( props ) => {

    const tweet = props.tweet;

    const handleClick = (e) => {
        window.location.reload(false);
      }

    return ( 
        <div className="home">
       
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
 
export default Home;
