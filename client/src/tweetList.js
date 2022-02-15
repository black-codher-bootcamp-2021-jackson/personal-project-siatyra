const TweetList = ({profiles, renderProfile}) => {


    return ( 
        <div className="tweetlist">
        <ul>
        {profiles && profiles.length > 0 ? (
          profiles.map((profile) => renderProfile(profile))
        ) : (
          <p>No profiles found</p>
        )}
      </ul> 
      </div> );
}
 
export default TweetList;