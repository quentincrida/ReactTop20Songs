import React, { Fragment } from 'react';
import SongItem from '../components/SongItem';
import Songlist from '../components/Songlist';



class SongContainer extends React.Component {
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
        <Fragment>
     <div className="song-container">
       Top 20 Songs in Planet UK!
       <Songlist data= {this.state.songs}
       />

     </div>
     </Fragment>
   );
    }

}

export default SongContainer;



// <Fragment>
//       <h2>Add a comment: </h2>
//       <CommentForm onCommentSubmitted={this.handleNewComment} />
//       <h2>Comments</h2>
//       <CommentList data= {this.state.data}/>
//       </Fragment>
