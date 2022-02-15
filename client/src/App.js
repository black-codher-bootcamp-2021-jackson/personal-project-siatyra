import React, { useState, useEffect } from "react";
import LiveTweet from "./Livetweet";
import Navbar from "./Navbar";
import Home from "./Home";
import { getAllProfiles } from "./services/profileService";
import TweetList from "./tweetList";
import getRandomTweet from "./RandomTweet";

function App() {
  const [profiles, setProfiles] = useState(null);
  const [randomTweet, setRandomTweet] = useState({})


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


  const renderProfile = (user) => {
    return (
      <div className="randomTweet" key={user.id}>
        <img src="https://i.pinimg.com/564x/da/a6/48/daa6482e6ce60b0e3b5724a0dd85c2f6.jpg" height="70px" width="70px" id="icon"></img> 
        <h3 className="username"> DojaCat </h3>
        <h3 className="text">  {`${user.text}`}
        </h3>
        <p>{user.created_at}</p>

      </div>
    );
  };

 
console.log(randomTweet)
  return (
    <div>
      <main>
      <Navbar />
        {/* <button onClick={() => setClickTweet(randomTweet)}>Random</button> */}
        <div className="tweet container">
          <div id="tweet">
            {renderProfile(randomTweet)}
          </div>
        </div>
 
        {/* <Home profiles={profiles} renderProfile={renderProfile}/> */}
        {/* <h2><LiveTweet /></h2> */}
      </main>
      {/* <TweetList profiles={profiles} renderProfile={renderProfile}/> */}
    </div>

  );
 }



export default App;
