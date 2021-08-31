import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    name: '',
    followers: '',
    following: ''
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/battleb2014')
    .then(res => {
      this.setState({
        name: res.data.name,
        followers: res.data.followers,
        following: res.data.following
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className = 'container'>
          <img src = 'https://avatars.githubusercontent.com/u/49825791?v=4' alt = 'me' />
          <h1>{ this.state.name }</h1>
          <div className = 'wrap'>
            <div className = 'follow'>
              <h3>Followers</h3>
              <p>{ this.state.followers }</p>
            </div>
            <div className = 'follow'>
              <h3>Following</h3>
              <p>{ this.state.following }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
