import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      songData: []
    }
  }
  // state = {
  //   songData: []
  //   /* TODO: What should go in state here?? Anything we don't want to have to fetch again for instance...? */
  // }
  
  songApi = () => {
    fetch(API_ENDPOINT)
    .then(resp => resp.json())
    .then(song => {
      this.setState({songData: song})
    })
  }
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.songApi}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }
  
  render(){
    console.log(this.state)
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songData={this.state.songData}/> {/** TODO: What props do I need? */}
        
      </div>
    );
  }
}

export default App;
