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
      users : {},
      // searchUser : ''
    };
  }

  changeSearchUser = (searchUser) =>{
    this.props.fetchUsers(searchUser);
  }

  render() {
    let users = this.props.users.users;
    return (
      <div>
        <NavbarWithSearch changeSearchUser={this.changeSearchUser}/>
        {(users && users.total_count)?
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
const mapStateToProps = state => ({users:state.users});
export default connect(mapStateToProps, { fetchUsers })(MainComponent);
