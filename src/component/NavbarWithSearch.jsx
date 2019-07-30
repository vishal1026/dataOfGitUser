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
  }

  render() {
    return (
      <div>
        <Navbar color="primary" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto " navbar>
              <NavItem style={{marginLeft:'3rem'}}>
                <FormGroup>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>Sort By Name (A - Z)</option>
                    <option>Sort By Name (Z - A)</option>
                    <option>Rank ↑</option>
                    <option>Rank ↓</option>
                  </Input>
                </FormGroup>
              </NavItem>
              <NavItem style={{marginLeft:'3rem'}}>
                <InputGroup>
                  <Input id='searchUser' value={this.state.searchUser}  onChange={this.handleOnChange} placeholder="search" />
                  <InputGroupAddon addonType="append"><span className="fa fa-search form-control-feedback"></span></InputGroupAddon>
                </InputGroup>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}