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
    if (this.props.users.users){
      this.setState({
        users : this.props.users,
        fetchedData : true
      })
    }
  }
componentDidMount(){
  // this.props.fetchUsers();
  console.log("will mount",this.props.users)
}
//   componentDidMount(){
//     let name = 'vishal';
//     fetch(`https://api.github.com/search/users?q=${name}`)
//     .then((response) => response.json())
//     .then((data)=>{console.log(data)})
//     .catch((error)=>console.log(error));
//   }

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
    let users = (this.state.users.users)? this.state.users : this.props.users;

    console.log('users',users, 'sortType', sortType);
    switch(sortType){
      case 1:
          users.users.items.sort((a, b) => (a.login + b.login))
        break;
      case 2:
        users.users.items.sort((a, b) => (a.login < b.login))
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
     this.setState({users})
  }

  render() {
    let users = (this.state.users.users)? this.state.users.users : this.props.users.users;
    return (
      <div>
        <NavbarWithSearch sortHandler={this.sortHandler}/>
        <div className='mx-auto p-3 bg-light pb-5'>
        { (this.state.fetchedData) ?
          <div className='bg-light'>
            <UserView users={users}/>
            <Pagination/>
          </div>:null
        }
        </div>
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
