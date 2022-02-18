import React, { useState, useEffect } from "react";
import LiveTweet from "./LiveTweet";
import Navbar from "./Navbar";
import Home from "./Home";
import { getAllProfiles } from "./services/profileService";
import TweetList from "./tweetList";
import './App.css';



// import { Router, Routes, Route } from 'react-router-dom'

function App() {
  const [profiles, setProfiles] = useState(null);
  const [randomTweet, setRandomTweet] = useState({})
  // const { latestTweet, loading, error } = LiveTweet("https://api.twitter.com/2/users/568545739/tweets?tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=5");

  

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response) 
        const getRandomTweet = response[Math.floor(Math.random() * response.length)];
        console.log(getRandomTweet)
        setRandomTweet(getRandomTweet)
      }
    }

    getProfiles();
  }, [profiles]);


  const renderTweet = (user) => {
    return (
      <div className="randomTweet" key={user.id}>
        <div className="tweetuser">
        {/* <img src="https://i.pinimg.com/564x/da/a6/48/daa6482e6ce60b0e3b5724a0dd85c2f6.jpg" height="70px" width="70px" id="icon"></img>  */}
        <h3 className="username"> DojaCat: {`${user.text}`}</h3>
        
        </div>

        <div classname="tweetdate">
        <p className="date">{user.created_at}</p>
        </div>

      </div>
    );
  };

  const tweet = renderTweet(randomTweet);

  const handleClick = (e) => {
    window.location.reload(false);

  }

  // if (loading) {return <h1> Loading </h1>}
  // if (error) {console.log(error)}

  // else {
 

  return (
    <body>
      <a className ="moopic" 
      href="https://imgbb.com/">
        <img 
      src="https://i.ibb.co/JR2Y29k/moo-removebg-preview.png" 
      alt="moo-removebg-preview" 
      border="0" />
      </a>
      
      <a className="moopicreversed"
      href="https://imgbb.com/">
        <img src="https://i.ibb.co/7RvdFk3/image-removebg-preview.png" 
        alt="image" border="0" />
        </a>
    <div>
      <main>
        <Home />
      <Navbar />
 
  

        {/* <button onClick={() => setClickTweet(randomTweet)}>Random</button> */}
        <div className="tweet_container">
          <div id="tweet">
            {tweet}
          </div>
        </div>
        <div className="new_tweet">
          <p classname="newtweetmessage">click button for new tweet</p>
          <button onClick={(e) => handleClick(e)}>beep boop</button>
        </div>

        <div className="livetweet">
          {/* <h1>{latestTweet?.user}: {latestTweet?.text}</h1> */}
        </div>
 
        {/* <Home profiles={profiles} renderProfile={renderProfile}/> */}
          {/* <h2><LiveTweet /></h2> */}

      </main>
      {/* <TweetList profiles={profiles} renderProfile={renderProfile}/> */}
    </div>
    </body>

  );
 }
// }



export default App;
