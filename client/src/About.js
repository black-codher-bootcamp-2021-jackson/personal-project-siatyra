const About = () => {
    return ( 
        <div className="about-container">

            <div className="about-me">
                <h2>about me</h2>
                <p> Hello dear reader, I hope you're well! My name is Sia Tyra Anglin and I am the proud creator of this app.</p>
                <p>I am an English Lit/Lang graduate interested in software development and this is my final project as part of the Black Codher full-stack development course.</p>
                <p>I made this app because I have been a fan of Doja Cat's for a long time and her habit of posting nonsensical tweets has brought me out of a bad mood several times over the years (not quite so much as when I was developing this app though)</p>
            </div>

            <div className="about-app">
                <h2>about this app</h2>
                <p>This app has three main components across four pages: the random tweet, the live tweet, and the library of tweets</p>
                <p>The "library" page is an array of Doja Cat's tweets from 11/21 - 02/22 that I pulled from the twitter API via a CURL request (read more about CURL requests here if you don't know what this is) </p>
                <p>The "home" page pulls a tweet from that array and displays it at random every time a button is clicked</p>
                <p>The "latest" page displays the latest tweet from doja cat. To get this I had to build a server.</p>
                <p>You may be asking me in your head : "Why would you make something so pointless? Surely if I want to see a doja cat tweet I can go to twitter?"</p>
                <p>While you might have a point, no twitter feed will start to play "moo" as you log in, so it was necessary to bring this app into the world.</p>
            </div>

            <div className="about-doja-cat">
                <h2>about doja cat</h2>
                <p>Doja cat is a pop artist with fab range. She is well-known for posting unhinged content on social media.</p>
            </div>

           


        </div>
     );
}
 
export default About;