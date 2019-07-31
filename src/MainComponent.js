import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import './App.css';
import {fetchUsers} from './actions/usersAction'
import {NavbarWithSearch} from './component/NavbarWithSearch'

class MainComponent extends React.Component {
  state = {
    result : {},
    name : 'vishal'
  }

  componentWillMount(){
      this.props.fetchUsers();
  }
//   componentDidMount(){
//     let name = 'vishal';
//     fetch(`https://api.github.com/search/users?q=${name}`)
//     .then((response) => response.json())
//     .then((data)=>{console.log(data)})
//     .catch((error)=>console.log(error));
//   }
  render() {
      console.log("test", this.props);
    return (
      <div>
        {/* {this.getUser('vishal')} */}
      <NavbarWithSearch/>
      </div>
    );
  }
}
// MainComponent.propTypes = {
//     fetchUsers : PropTypes.func.isRequired,
//     users : PropTypes.object.isRequired
// }
const mapStateToProps = state => ({users:state.usersData});
export default connect(mapStateToProps, { fetchUsers })(MainComponent);
