import React from 'react';

import UserCard from './UserCard.js';
import './App.css';

class App extends React.Component {
  state = {
    user: {}
  };
  componentDidMount(){
    fetch(`https://api.github.com/users/lkarnes`)
    .then(res=> res.json())
    .then(data=> {this.setState({user: data})
    console.log(data)
  })
    .catch(err=>console.log(err))
  }
  render() {
    return (
    <div className="App">
      <UserCard data={this.state.user} />
    </div>
  );
  }
  
}

export default App;
