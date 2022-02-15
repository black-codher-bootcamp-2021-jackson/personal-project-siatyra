function getRandomTweet({profiles, renderProfile}) {
    
    if (profiles) {
        return profiles[Math.floor(Math.random() * profiles.length)];
        renderProfile(profiles)
    }
    else {console.log("no random profiles found");}
}

export default getRandomTweet;