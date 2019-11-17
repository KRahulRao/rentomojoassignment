import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "./ToDoBoard.scss";
import UserList from '../Users/userList';
import UserPosts from '../Users/userPosts';
import PostDetails from '../Users/postDetails';

@inject('todoStore')
@observer class ToDoBoard extends Component {
    constructor(props) {
        super(props);
        // this.addNewRow = this.addNewRow.bind(this);
        // this.submit = this.submit.bind(this);
        this.state = {
           allUsers:[],
           headers:['Name','Company','Posts'],
           showPosts:false,
           showUsers:true,
           showPostDetails:false,
           allPostsOfUser:[],
           postDetails:{}
        }
    }

    componentDidMount() {
        this.props.todoStore.fetchUsers()
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            this.setState({ allUsers : data })
        });
    }

    openPosts = (userId) =>{
        this.props.todoStore.fetchUserPosts(userId)
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            this.setState({ allPostsOfUser:data,showUsers:false,showPosts:true,showPostDetails:false })
        })
     }

     openPostDetails = (userId) =>{
        this.props.todoStore.getPostDetails(userId)
         .then((response)=>{
             return response.json();
         }).then((data)=>{
             this.setState({ postDetails:data,showUsers:false,showPosts:false,showPostDetails:true })
         })
     }
     
     deletePosts = (userId) =>{
        this.props.todoStore.deletePosts(userId)
         .then((response)=>{
             console.log(response);
             if(response.status===200){
               this.setState({ showPosts:true,showPostDetails:false });
             }
            
         })
     }
    
    render(){

        let { allUsers } = this.state;
        let formStyle ={
             display:'inline-flex',
             textAlign: 'justify',
             msTextJustify: 'distribute-all-lines',
             textJustify: 'distribute-all-lines',
             marginTop:'20px'
        }
    
        //   console.log(oneRow[0]);
          
        return(

       <div>
             {
               (this.state.showUsers) ? <UserList
              openPosts={this.openPosts}
              allUsers={this.state.allUsers}/> : null  
             }
             {
                (this.state.showPosts) ? <UserPosts
                openPostDetails={this.openPostDetails}
                allPosts={this.state.allPostsOfUser}/> : null  
             }
             {
                (this.state.showPostDetails) ? <PostDetails
                store={this.props.todoStore}
                deletePosts={this.deletePosts}
                postDetails={this.state.postDetails}/> : null  
             }
        </div> 
      
          
        )
    }
}

export default ToDoBoard;