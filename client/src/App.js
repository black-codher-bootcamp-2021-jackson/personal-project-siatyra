import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { getAllProfiles } from "./services/profileService";
import { getNewTweets } from "./services/twitterService";
import TweetList from "./tweetList";
import './App.css';
import { Routes, Route } from "react-router-dom"
import LiveTweet from "./LiveTweet";
import About from "./About";
import NotFound from "./NotFound";
import TypewriterComponent from "typewriter-effect";




// import { Router, Routes, Route } from 'react-router-dom'

function App() {
  const [profiles, setProfiles] = useState(null);
  const [randomTweet, setRandomTweet] = useState({});
  const [twitterTweet, setTwitterTweet] = useState({});
  const [newTweet, setNewTweet] = useState([]);
  const [loaded, setLoaded] = useState('');  

  

  useEffect(() => {
    async function getTweets() {
      if (!profiles && twitterTweet) {
        const response = await getAllProfiles();
        setProfiles(response);

        const responseTwo = await getNewTweets();
        console.log(responseTwo);
        setTwitterTweet(responseTwo);

        const getRandomTweet = response[Math.floor(Math.random() * response.length)];
        console.log(getRandomTweet);
        setRandomTweet(getRandomTweet);

        const getNewTweet = responseTwo.data[0];
        console.log(getNewTweet);
        setNewTweet(getNewTweet);

        const isLoaded = [getRandomTweet, getNewTweet];
        console.log(isLoaded);
        setLoaded(isLoaded)
        
      }

      
    }

    getTweets();
  }, [profiles, twitterTweet]);


  const renderTweet = (user) => {
    if (loaded) {
    return (
      <div className="randomTweet" key={user.id}>
        <div className="tweetuser">
        {/* <img src="https://i.pinimg.com/564x/da/a6/48/daa6482e6ce60b0e3b5724a0dd85c2f6.jpg" height="70px" width="70px" id="icon"></img>  */}
        <TypewriterComponent
        onInit={(typewriter => {
          typewriter.typeString(`DojaCat: ${user.text}`)
          .start();
          
        })}
        // <h3 className="username"> DojaCat: {`${user.text}`}</h3>
        />
        </div>

        <div classname="tweetdate">
        <p className="date">{user.created_at}</p>
        </div>

      </div>
    );
    }

    return (<p>typing...</p>);
  };

  const tweet = renderTweet(randomTweet);
  const liveTweet = renderTweet(newTweet)


  return (
    <div className="body">

    
      <div className="header">
            <h1>Doja tweets</h1>
        </div>

        <Navbar />

      <div className="main">

        <Routes>
          <Route path="/" element={<Home tweet={tweet} />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="livetweet" element={<LiveTweet liveTweet={liveTweet} />}></Route>
          <Route path="all" element={<TweetList profiles={profiles} renderTweet={renderTweet} />}></Route>
        </Routes>
        </div>

        <div className="pics">
        <img
        className="moopic"
        src="https://i.ibb.co/JR2Y29k/moo-removebg-preview.png" 
        alt="moo-removebg-preview" 
        border="0" />
      
        <img 
        className="moopicreversed"
        src="https://i.ibb.co/7RvdFk3/image-removebg-preview.png" 
        alt="image" 
        border="0" />
        </div>

    </div>

  );
 }




export default App;
