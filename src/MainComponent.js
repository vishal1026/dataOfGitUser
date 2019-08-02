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
  // componentWillMount(){
  //     this.props.fetchUsers('');
  // }
  async getUsersName(userURL){
    // fetch(userURL)
    // .then((response) => response.json())
    // .then((data)=>{return(data)})
    // .catch((error)=>console.log(error));
    const response = await fetch(userURL)
    const json = await response.json()
    console.log('json',json);
    return(json);
  }

  async getModifiedData (users){
    // console.log("aaaaaaaaaaa",users.items[0].id);
    let temp ={};
    for(let i=0; i<users.items.length; i++){
      // temp = users.items[i]
      temp = await this.getUsersName(users.items[i].url)

      // users.items[i] = {...users.items[i], ...this.getUsersName(users.items[i].url)}
      // console.log('users.items[i]',users.items[i])
      // console.log('this.getUsersName(users.items[i].url)', this.getUsersName(users.items[i].url).PromiseValue)
      console.log('temp', temp);
    }
    // return users;
  }

changeSearchUser = (searchUser) =>{
  // this.setState({searchUser});
  this.props.fetchUsers(searchUser);
  console.log('changeSearchUser',searchUser);
  // console.log('changeState',this.state.searchUser);
}
  render() {
    let users = this.props.users.users;
    return (
      <div>
        <NavbarWithSearch changeSearchUser={this  .changeSearchUser}/>
        {(users && users.total_count)?
        <div className='mx-auto p-3 bg-light pb-5'>
          <div className='bg-light'>
            {/* { this.getModifiedData(users) } */}
            {/* {console.log(users.items)} */}
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
