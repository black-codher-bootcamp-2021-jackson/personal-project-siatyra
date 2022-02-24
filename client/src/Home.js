const Home = () => {
    return ( 
        <div className="Home">

            <div className="home-intro">
            <h2>hi!</h2>
            <h3>welcome to doja tweets </h3>
            </div>

            <div className="home-about">
                <h3>what is this?</h3>
                <p>you may (or may not) be familiar with Doja Cat, a celebrity well-known for posting entertaining content online</p>
                <p>this app collates 212 tweets from november 2021 - february 2022 on the library page, and displays one at random on the random page</p>
                <p>the latest page fetches and displays her latest tweet from twitter</p>
            </div>

        <div className="home-pages">
            <h3>main pages</h3>
                <div className="home-pages-links">
                <a href="/all">library of tweets</a>
                <br></br>
                <a href="/random">random tweet</a>
                <br></br>
                <a href="/livetweet">live tweet</a>
                <br></br>
                <a href="/about">(read more about them here)</a>
                </div>
        </div>

            <div className="home-protest">
                <h4>"if I want to see a tweet, I can just go to twitter!"</h4>
                <h4>"this app is pointless!"</h4>
                <p>pointless it may be, but also very pink and fun</p>
                <p>feel free to hang out here while "moo" plays in the background and generate as many tweets as you like</p>
                </div>
            
            <div className="content-warning">
                <h4>content warning</h4>
            <p>some tweets may contain explicit language</p>
            </div>
        </div>
     );
}
 
export default Home;
