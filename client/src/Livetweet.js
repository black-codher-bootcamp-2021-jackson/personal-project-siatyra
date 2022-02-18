// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { getAllProfiles } from './services/profileService';

// function themLiveTweets() {
   
// // const [latestTweetsData, setLatestTweetsData] = useState(null);
// // const [loading, setLoading] = useState(false);
// // const [error, setError] = useState(null);

// // useEffect(() => {
// //     async function getLastestTweets() {
// //         if (!latestTweetsData) {
// //             const response = await getAllProfiles();
// //             setLatestTweetsData(response)
// //             console.log(getLastestTweets)
// //         }
// //     }

// //     getLastestTweets();
// // }, [latestTweetsData]);

// const LiveTweet = ({latestTweetsData, renderProfile}) => {


//     return ( 
//         <div className="latest_tweet">
//         <ul>
//         {latestTweetsData && latestTweetsData.length > 0 ? (
//           latestTweetsData.map((latestTweets) => renderProfile(latestTweets))
//         ) : (
//           <p>No tweets found</p>
//         )}
//       </ul> 
//       </div> );
// }
// }

// //     useEffect(() => {
// //         setLoading(true);
// //         axios
// //         .get(url)
// //         .then((response) => {
// //             setLatestTweetsData(response.latestTweetsData);
// //         })
// //         .catch((err) => {
// //             setError(err);
// //         })
// //         .finally(() => {
// //             setLoading(false);
// //         });
// //     }, [url]);

// //     return { latestTweetsData, loading, error }
// // }


 
// export default LiveTweets;
