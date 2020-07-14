import React, {useState} from 'react';

class SongItem extends React.Component {
    constructor(){
        super()
        this.state = {
          likeData: 0
        }
    }

    addLike = () => {
        this.setState ({likeData: this.state.likeData +1 })
    }

    addFavorite = (e) => {
        console.log(this.props.id)

    }
  
    render() {
      
    return ( 
        <tr>
            <td>{this.props.title}</td>
            <td>{this.props.artist}</td>
            <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={this.addFavorite}>{this.props.favorite ? "💚" : "♡"}</td>
            <td onClick={this.addLike}>Likes: {this.state.likeData}</td>
        </tr>
    )
  }
}

export default SongItem;