import React, { Component } from 'react';
import SongItem from '../components/SongItem';
import Songlist from '../components/Songlist';



class SongContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []

    };

    }
    componentDidMount(){
      console.log('component');
      const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

      fetch(url)
      .then(res => res.json())
      .then(data => this.setState({songs: data.feed.entry}))
      .catch(err => console.error);
    }

    render(){
      return (
     <div className="song-container">
       <h2>Top 20 Songs in Planet UK!</h2>
       <Songlist songs={this.state.songs}/>
     </div>

   );
    }

}

export default SongContainer;
