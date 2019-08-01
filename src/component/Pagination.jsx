import React from 'react';
import {
    } from 'reactstrap';
import '../App.css';

export class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      searchUser: '',
      sortType: '1',
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleOnChange = (event) =>{
    this.setState({[event.target.id]:event.target.value});
    console.log(this.state.sortType);
  }

  render() {
    let users = this.props.users;
    console.log("user", users);
    return (
      <div className="float-right">
        <ul id='page-numbers'>
          <li id={1} key={1} onClick={this.handleOnClick}>1</li>
          <li id={2} key={2} onClick={this.handleOnClick}>2</li>
          <li id={3} key={3} onClick={this.handleOnClick}>3</li>
          <li id={4} key={4} onClick={this.handleOnClick}>4</li>
        </ul>
      </div>
    );
  }
}