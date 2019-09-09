import React from 'react';

import UserCard from './UserCard.js';
import './App.css';

class App extends React.Component {
  state = {
    user: {},
    following: ''
  };
  componentDidMount(){
    fetch(`https://api.github.com/users/lkarnes/following`)
    .then(res=> res.json())
    .then(data=>{this.setState({following: data })})
    .catch(err=> {console.log(err)})
    fetch(`https://api.github.com/users/lkarnes`)
    .then(res=> res.json())
    .then(data=> {this.setState({user: data})})
    .catch(err=>console.log(err))
  }
  render() {
    if(!this.state.user){
      return(<h1>loading..</h1>)
    }
    return (
    <div className="App">
      <UserCard data={this.state.user} follow={this.state.following} />
    </div>
  );
  }
  
}

export default App;
