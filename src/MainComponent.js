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
      result : {},
      // searchUser : ''
    };
  }
  // componentWillMount(){
  //     this.props.fetchUsers('');
  // }
  getUsersName=(userURL)=>{
    fetch(userURL)
    .then((response) => response.json())
    .then((data)=>{console.log(data)})
    .catch((error)=>console.log(error));
  }

  getModifiedData =(users)=> {
    for(let i=0; i<users.items.length; i++){
      console.log(users.items[i])
    }
  }

changeSearchUser = (searchUser) =>{
  // this.setState({searchUser});
  this.props.fetchUsers(searchUser);
  console.log('changeSearchUser',searchUser);
  // console.log('changeState',this.state.searchUser);
}
  render() {
    let users = this.props.users.users;
    console.log(users);
    return (
      <div>
        <NavbarWithSearch changeSearchUser={this.changeSearchUser}/>
        {(users && users.total_count)?
        <div className='mx-auto p-3 bg-light pb-5'>
          <div className='bg-light'>
            {/* { users = this.getModifiedData(users) } */}
            <UserView users={users}/>
            <Pagination/>
          </div>
        </div>:null}
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
