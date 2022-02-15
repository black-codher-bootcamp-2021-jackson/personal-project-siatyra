import { useState, useEffect } from "react";
import getRandomTweet from "./RandomTweet";



const Home = ({profiles, renderProfile, randomTweet}) => {


    const [homeTweet, setHomeTweet] = useState('click da button');
    const [age, setAge] = useState(25);
    const [testProfiles, setTestProfiles] = useState([
        { user: 'DojaCat', text: 'mike penis', id: 1}
    ]);

    useEffect(() => {
            console.log("use effect ran in home component")
            console.log(getRandomTweet)
    });


    const handleClick = (homeTweet, e) => {
        setHomeTweet('saweetie');
        setAge(90);
    }

    return ( 
        <div className="home">
            <h2>Home page</h2>
            <div className="test">
            {testProfiles.map((testTweet) => (
                <div className="test-preview" key={testTweet.id}>
                    <h2>{ testTweet.user } says... </h2>
                    <p>"{ testTweet.text }"</p>
                </div>
            ))}
            </div>
            <p>{ homeTweet } is {age} years old.</p>
            <h3>Click below for a random tweet</h3>
            <button onClick={(e) => handleClick(e)}>beep boop</button>
        </div>
     );
}
 
export default Home;