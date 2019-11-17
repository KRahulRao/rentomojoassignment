import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "../TodoBoard/ToDoBoard.scss";
import Onerow from '../TodoBoard/oneRow';
import Button from 'react-bootstrap/Button';
import { func } from 'prop-types';

@observer class userList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           allUsers:[],
           headers:['Post Details'],
           allComments:[],
           showComments:false
        }
        this.showComments.bind(this)
    }

    componentDidMount() {
        let { allUsers } = this.state;

     
        
    }

     showComments = (id) => {
        this.props.store.getPostcomments(id)
        .then((response)=>{
            return response.json()
        }).then((data)=>{
            this.setState({allComments: data,showComments:true});
        })
     }

     renderComments = () => {
        return this.state.allComments.map((comment) =>{
            return (
              <tr>
                <td>
                    <p>{comment.name}</p>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                </td>
              </tr>
            )
          })
   }

     renderTableData() {
         console.log(this.props.postDetails);
           return (
               <div>
                    <tr>
                        <td>
                            <p><span><b>Title</b></span> <span onClick={()=> this.props.deletePosts(this.props.postDetails.id)}  className='link-btn'>Delete</span></p>
                             <p>{this.props.postDetails.title}</p>
                             <p>{this.props.postDetails.body}</p>
                        </td>
                        {/* <td onClick={ ()=> { this.props.openPostDetails(user.id)}}><p className='viewPosts'>View Details</p></td> */}
                    </tr>
                    <tr>
                        <span onClick={() => this.showComments(this.props.postDetails.id) } className='link-btn'>Show Comments</span>
                    </tr>
                    { this.state.showComments ?  this.renderComments() : null }
                </div> 
           )
       
     }
    
    render(){
        
        let { allUsers } = this.state;  
        return(
            <div className="todo-wrapper">
                <table className='postsList'>
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