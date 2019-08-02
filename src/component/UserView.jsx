import React from 'react';
import {
  Collapse, Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Table  } from 'reactstrap';
import '../App.css';

export class UserView extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      searchUser: '',
      sortType: '1',
      isOpen: false,
      collapse : false
    };
  }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  toggle= (event)=> {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  handleOnChange = (event) =>{
    this.setState({[event.target.id]:event.target.value});
    console.log(this.state.sortType);
  }
  getCard = (users) => {
    return (
      users.items.map((user,index)=>{
        return(

          <Card className='h-25 p-3 mt-3 mx-auto' key={index}>
            <div className="card-horizontal">
              <div>
              {/* <img width='150' height='150' className="rounded-circle" src="https://avatars1.githubusercontent.com/u/1388100?v=4/"/> */}
                <img width='150' height='150' className="rounded-circle" src={user.avatar_url}/>
              </div>
              <CardBody>
                <CardTitle><strong>{user.login}</strong></CardTitle>
                <CardSubtitle><small>Profile URL : {user.html_url}</small></CardSubtitle>
                <CardText>
                  Score : {user.score}<br></br>
                  ID : {user.id}
                  {/* <Button className='float-right'>Details</Button> */}
                  <Button outline color="primary" className='float-right' onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                    {(this.state.collapse) ? 'Collapse': 'Details' }
                  </Button>
                </CardText>
              </CardBody>
            </div>
            <Collapse isOpen={this.state.collapse}>
              <Table className='table table-striped'>
                <tbody>
                  <tr>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Collapse>
          </Card>
        );
      })
    );
  }
  render() {
    let users = this.props.users;
    console.log("user", users);
    return (
      <div>
        <div className="w-50 mx-auto">
          <div className="h-25 p-3 mt-3">
            <p><strong>Total Result:{(users)? users.total_count:null}</strong></p>
          </div>
            {(users) ? this.getCard(users):null}
        </div>
      </div>
    );
  }
}