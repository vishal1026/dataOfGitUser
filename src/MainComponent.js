import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import './App.css';
import {fetchUsers} from './actions/usersAction';
import {NavbarWithSearch} from './component/NavbarWithSearch'
import {UserView} from './component/UserView'
import {Pagination} from './component/Pagination'

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchUser: '',
      users:{},
      sortType: '1',
      isOpen: false,
      fetchedData : false
    };
  }
  componentWillMount(){
    this.props.fetchUsers();
  }
  changeSearchUser = (searchUser) =>{
    this.props.fetchUsers(searchUser);
    // this.setState({users:this.props.fetchUsers(searchUser),fetchedData : true })
  }

  sortByScoreAsc() {
    this.setState(prevState => {
      this.state.users.items.sort((a, b) => (a.score - b.score))
    });
  }

  sortByScoreDesc() {
    this.setState(prevState => {
      this.state.users.items.sort((a, b) => (b.score - a.score))
   });
  }

  sortHandler = (sortType) =>{
    let users = (this.state.users)? this.state.users : this.props.users;

    console.log('users',users, 'sortType', sortType);
    switch(sortType){
      case 1:
          users.users.items.sort((a, b) => (a.login + b.login))
        break;
      case 2:
        users.users.items.sort((a, b) => (a.login - b.login))
        break;
      case 3:
          users.users.items.sort((a, b) => (a.score + b.score))
        break;
      case 4:
        users.users.items.sort((a, b) => (a.score - b.score))
        break;
      default:
        break;
     }
    //  this.props.sortUserData(users);
    //  this.setState({users})
  }

  render() {
    // let users = (this.state.users)? this.state.users.users : this.props.users.users;
    let users = this.state.users.users;

    return (
      <div>
        <NavbarWithSearch sortHandler={this.sortHandler} changeSearchUser={this.changeSearchUser}/>
        {(users && users.total_count)?
        // {(this.state.fetchedData)?
        <div className='mx-auto p-3 bg-light pb-5'>
          <div className='bg-light'>
            <UserView users={users}/>
            <Pagination/>
          </div>
        </div>: <div className='mx-auto'><span>No record found</span></div>}
      </div>
    );
  }
}
MainComponent.propTypes = {
    fetchUsers : PropTypes.func.isRequired,
    users : PropTypes.object.isRequired
}
const mapStateToProps = state => ({users: users});
export default connect(mapStateToProps, { fetchUsers })(MainComponent);
