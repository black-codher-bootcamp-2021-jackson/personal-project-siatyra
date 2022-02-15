import React from 'react';
import axios from 'axios';

class LiveTweet extends React.Component {
  state = {
    tweet: []
  }

  componentDidMount() {
    const config = {
    Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAJaFYwEAAAAATcAKQ9UVnUH3YzdVqbaUe9cy144%3DwetUPFGUY6rafsx4oNGNRAy3uYE7CTA9EdWTrtvydVsGMNtqtq`
      };
    const apiUrl = `https://api.twitter.com/2/users/:568545739/tweets?tweet.fields=created_at&expansions=author_id&user.fields=created_at&public_metrics&max_results=1`;
    axios.get(apiUrl, config)
      .then(res => {
        const tweets = res.data;
        this.setState({ tweets });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.tweets
            .map(tweet =>
              <li key={tweet.id}>{tweet.text}</li>
            )
        }
      </ul>
    )
  }
}


export default LiveTweet;