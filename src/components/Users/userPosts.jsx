import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "../TodoBoard/ToDoBoard.scss";
import Onerow from '../TodoBoard/oneRow';
import Button from 'react-bootstrap/Button';
import { func } from 'prop-types';

@inject('todoStore')
@observer class userList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           allUsers:[],
           headers:['Name']
        }
    }

    componentDidMount() {
        let { allUsers } = this.state;

     
        
    }

     renderHeaders(){
          return this.state.headers.map((header) =>{
              return (
                <th>
                  <td>{header}</td>
                </th>
              )
            })
     }
     renderTableData() {
         console.log(this.props.allPosts);
        return this.props.allPosts.map((user, index) => {
           return (
              <tr key={user.id}>
                 <td>
                 <p>{user.title}</p>
                 <p>{user.body}</p>
                 </td>
                 <td onClick={ ()=> { this.props.openPostDetails(user.id)}}><p className='viewPosts'>View Details</p></td>
              </tr>
           )
        })
     }
    
    render(){
        
        let { allUsers } = this.state;  
        return(
            <div className="todo-wrapper">
                <table className='postsList'>
                    <thead>
                        {this.renderHeaders()}
                    </thead>
                    <tbody>
                        {/* {
                          this.renderTableRow()
                        } */}
                        {this.renderTableData()}                        
                    </tbody>
                </table>
            </div>
            
        )
    }
}

export default userList;