import React from 'react';
import './App.css';
import {NavbarWithSearch} from './component/NavbarWithSearch'

class App extends React.Component {
  state = {
    result : {},
    name : 'vishal'
  }

  componentDidMount(){
    let name = 'vishal';
    fetch(`https://api.github.com/search/users?q=${name}`)
    .then((response) => response.json())
    .then((data)=>{console.log(data)})
    .catch((error)=>console.log(error));
  }
  render() {
    return (
      <div>
        {/* {this.getUser('vishal')} */}
      <NavbarWithSearch/>
      </div>
    );
  }
}


export default App;
