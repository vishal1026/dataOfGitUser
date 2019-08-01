import React from 'react';
import {
  Collapse, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button  } from 'reactstrap';
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
      <div>

      </div>
    );
  }
}