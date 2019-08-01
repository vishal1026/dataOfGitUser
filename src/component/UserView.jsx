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
          <Card className='w-75 h-25 p-3 mt-3' key={index}>
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
                  <Button color="primary" className='float-right' onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                    {(this.state.collapse) ? 'Collapse': 'Details' }
                  </Button>
                </CardText>
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
              </CardBody>
            </div>
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
        <p><strong>Total Result:{(users)? users.total_count:null}</strong></p>
        {(users) ? this.getCard(users):null}

      </div>
  //     <div className="container-fluid">
  //     <div className="row">
  //         <div className="col-12 mt-3">
  //             <div className="card">
  //                 <div className="card-horizontal">
  //                     <div className="img-square-wrapper">
  //                         <img className="rounded-circle" src="http://via.placeholder.com/300x180" alt="Card image cap"/>
  //                     </div>
  //                     <div className="card-body">
  //                         <h4 className="card-title">Card title</h4>
  //                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  // </div>
    );
  }
}