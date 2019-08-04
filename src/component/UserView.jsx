import React from 'react';
import {
  Collapse, Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button  } from 'reactstrap';
import '../App.css';

export class UserView extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      searchUser: '',
      sortType: '1',
      isOpen: false,
      collapse : false,
      collapseDiv : '',
      repoList : []
    };
  }

  toggle= (event)=> {
    if (!this.state.collapse){
      let repoUrl = "https://api.github.com/users/"+event.target.id+"/repos"
      this.apiCaller(repoUrl);
    }
    this.setState({collapse: !this.state.collapse, collapseDiv:event.target.id });
  }

  apiCaller=(url)=>{
  fetch(url)
  .then((response) => response.json())
    .then((repoList)=>{this.setState({repoList})})
    .catch((error)=>console.log(error));
  }

  getCard = (users) => {
    return (
      users.items.map((user,index)=>{
        return(
          <Card className='h-25 p-3 mt-3 mx-auto' key={index}>
            <div className="card-horizontal">
              <div>
                <img width='150' height='150' className="rounded-circle" src={user.avatar_url}/>
              </div>
              <CardBody>
                <CardTitle><strong>{user.name}</strong></CardTitle>
                <CardSubtitle><small>Profile URL : {user.html_url}</small></CardSubtitle>
                <CardText>
                  Score : {user.score}<br></br>
                  Followers : {user.followers}
                  <Button outline color="primary" className='float-right' id={user.login} onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                    {((user.login === this.state.collapseDiv) && this.state.collapse) ? 'Collapse': 'Details' }
                  </Button>
                </CardText>
              </CardBody>
            </div>
            <Collapse isOpen={((user.login === this.state.collapseDiv) && this.state.collapse)? true:false}>
            {
              ((user.login === this.state.collapseDiv) && this.state.collapse)?
              <table className="table table-striped">
              <tbody>
                {(this.state.repoList.length>0) ?
                (this.state.repoList.map((repo)=>{
                  return (
                    <tr key={repo.name}>
                      <td>{repo.name}</td>
                      <td>{repo.language}</td>
                    </tr>
              )}))
              :null}
              </tbody>
            </table>:null
            }
            </Collapse>
          </Card>
        );
      })
    );
  }

  render() {
    let users = this.props.users;
    return (
      <div>
        <div className="w-50 mx-auto">
          <div className="h-25 p-3 mt-3">
            <p><strong>Total Result:{users.total_count}</strong></p>
          </div>
            {this.getCard(users)}
        </div>
      </div>
    );
  }
}