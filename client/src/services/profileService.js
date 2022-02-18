// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";


// const config = {
//   url: 'https://api.twitter.com/2/users/568545739/tweets?tweet.fields=created_at&expansions=author_id&user.fields=created_at&max_results=5',
//   headers: { 
//     'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAJaFYwEAAAAATcAKQ9UVnUH3YzdVqbaUe9cy144%3DwetUPFGUY6rafsx4oNGNRAy3uYE7CTA9EdWTrtvydVsGMNtqtq', 
//     'Cookie': 'guest_id=v1%3A164501591572021451'
//   }
// };

const getAllProfiles = async () => {
  const response = await axios.get(`/api/profile`);
  return response.data || [];
  // console.log(latestTweetsData);
  
  // const latestTweetsData = latestTweets.data;
  // console.log(latestTweetsData)
};

// All of the endpoints in this file can be exported below
export { getAllProfiles };
