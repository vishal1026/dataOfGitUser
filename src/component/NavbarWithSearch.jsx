import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Input,
  InputGroup,
  InputGroupAddon,
  FormGroup } from 'reactstrap';
import '../App.css';

export class NavbarWithSearch extends React.Component {
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
    return (
      <div>
        <Navbar color="primary" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto w-50 justify-content-between" navbar>
              <NavItem>
                <FormGroup style={{width: '200px'}}>
                  <Input type="select" value={this.state.sortType} onChange={this.handleOnChange} name="sortType" id="sortType">
                    <option value='1'>Sort By Name (A - Z)</option>
                    <option value='2'>Sort By Name (Z - A)</option>
                    <option value='3'>Rank ↑</option>
                    <option value='4'>Rank ↓</option>
                  </Input>
                </FormGroup>
              </NavItem>
              <NavItem>
                <InputGroup>
                  <span style={{position: 'relative'}} >
                    <Input id='searchUser' value={this.state.searchUser}  onChange={this.handleOnChange} placeholder="search" />
                    <i className="fa fa-search" style={{position: 'absolute', right: '10px', top: '10px', color: 'darkgray'}}></i>
                  </span>
                </InputGroup>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}