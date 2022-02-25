const Home = () => {
    return ( 
        <div className="Home">

            <div className="home-intro">
            <h2>hi!</h2>
            <h3>welcome to doja tweets </h3>
            </div>

            <div className="home-about">
                <h3>what is this?</h3>
                <p>you may (or may not) be familiar with doja cat, a pop icon well-known for music, art, and posting senseless content on social media (primarily twitter)</p>
                <p>this app collates 212 of her tweets from november 2021 - february 2022 in a library</p>
                <p>you can find her most recent tweets on the <a href="/livetweet">latest</a> page, a random tweet from the library on the <a href="/random">random</a> page, and all those tweets on the <a href="/all">library</a> page</p>
            </div>

            <div className="home-protest">
                <h4>"if I want to see a tweet, I can just go to twitter!"</h4>
                <h4>"this app is pointless!"</h4>
                <p>pointless it may be, but also very pink and fun</p>
                <p>feel free to hang out here for a while and generate as many tweets as you like</p>
                </div>
            
            <div className="content-warning">
                <h4>content warning</h4>
            <p>some tweets may contain explicit language</p>
            </div>
        </div>
     );
}
 
export default Home;
