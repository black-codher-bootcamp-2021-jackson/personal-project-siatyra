const About = () => {
    return ( 
        <div className="about-container">

            <h2>about</h2>

            <div className="about-doja-cat">

                <h3>doja cat</h3>

                <p>Doja cat is a pop artist who has been making music since she was a teenager. She rose to fame after the release of <a href="https://www.youtube.com/watch?v=mXnJqYwebF8"><b>"Mooo!"</b></a> which quickly became a meme in pop culture thanks to its absurd lyrics.</p>
                <p>After, she was able to hold onto fame by having an industrious online presence.</p>
                <p>A large portion of what she posts online can be described as "shitposting" - posts with little to no sincere or insightful substance. Shitposts are generally surreal and have no context.</p>
                <p>I made this app to give a platform to some of these posts because I find them very funny.</p>
                <p>If you'd like to know more, you can read more about Doja Cat on Hip Hop Scriptures <a href="https://www.hiphopscriptures.com/doja-cat#:~:text=Doja%20Cat%20is%20an%20American,apps%20like%20TikTok%20and%20Instagram"><b>here</b></a>.</p>

            </div>

            <div className="about-me">

                <h3>me</h3>

                <p>I'm Sia Tyra Anglin, the proud creator of this app!</p>
                <p>I've had a vested interest in software development since I was a teenager curating themes on the blogging platform Tumblr. I received the wonderful opportunity to explore this as a career avenue thanks to receiving a scholarship for the Black Codher Full-Stack development bootcamp.</p>
                <p>At the moment, I work as a customer support specialist in ecommerce. I've found the concepts on the course immensely useful in my current job role and am pursuing a career in software development.</p>
                <p>I graduated from my degree in English Literature and Language in 2020. Through my study I took additional courses in 3 different languages.</p>
                <p>I made this app because I thought it would be a fun challenge that would bring together the course content.</p>
            </div>

            <div className="about-black-codher">

                <h3>black codher</h3>

                <p>The Black Codher Bootcamp is an organisation run by Coding Black Females and Niyo Enterprise that aims to get more black women into technology.</p>
                <p>They teach technical skills including software programming, data management, analytics and design.</p>
                <p>You can read more about the Black Codher Bootcamp <a href="https://blackcodher.com/"><b>here</b></a>.</p>
                <br></br>

                <h4>topics covered</h4>

                <p>Command line and Git</p>
                <p>HTML/CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>NodeJS</p>
                <p>Python</p>
                <p>Database (Mongo & SQL)</p>
                
            </div>

            <div className="about-app">

                <h3>the app</h3>

                <p>The specification for this project required me to build a fullstack (MERN) application.</p>
                <p>I first collected the data ( or tweets) for the project using a CURL request in my local terminal from the twitter API.</p>
                <p>Next, I created a database with MongoDB and populated the tweets there. I created a schema for the data which included the tweet text, author id, id, and date created.</p>
                <p>Then, I built two servers using Node.js - one to get the data from this database, the other to get the latest tweets from twitter.</p>
                <p>After this, I imported the data from the servers into my React client. </p>
                <p>Within the client, I used useState and useEffect to pull the tweets that I wanted from the data and set a loading state.</p>
                <p>I created a render function that would identify each tweet by the id key, then render the text and date of the tweet. I also used the <a href="https://www.npmjs.com/package/typewriter-effect">TypeWriter package component</a> in react to add a typing effect to any tweets rendered.</p>
                <p>I then created objects out of the tweets I wanted to render (the latest tweet, and the random tweet).</p>
                <p>I passed the random and live tweet objects to the latest/random/library tweets components. The latest component displays the latest 5 tweets.</p>
                <p>The random component has a button which refreshes the page each time it is clicked (thus pulling a new tweet from the database each time).</p>
                <p>The library component maps through my database and displays all the tweets there.</p>
                <p>I then used routing to show all those components as the pages that appear in the navigation.</p>
                <p>Finally, I added some styling to the page :)</p>

                <br></br>

                <h4>styling</h4>

                <p>I wanted the app to be responsive, so added styling that would support the app on mobile view.</p>

                <h5>accessibilty</h5>

                <p>The images used are not essential, so don't include detailed src.</p>
                <p>There is enough colour contrast for all the text the app to be visible</p> 
                <p>However, the font used (Urbanist) is slim, so I increased the size of the text for readability</p>

            </div>
        </div>
     );
}
 
export default About;