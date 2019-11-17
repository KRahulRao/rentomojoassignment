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
        this.renderTableRow = this.renderTableRow.bind(this);
        this.renderTableData = this.renderTableData.bind(this);
        this.state = {
           allUsers:[],
           headers:['Name','Company','Posts']
        }
    }

    componentDidMount() {
        let { allUsers } = this.state;

     
        
    }

    addNewRow(event){
        let { allData } = this.state;
        this.setState({
            allData: allData.concat(<Onerow todoStore={this.props.todoStore} key={allData.length} />)
        });
    }
    submit(){
       // let { allData } = this.state;
        // this.props.todoStore.addData = allData;
      let totalData = this.props.todoStore.getData();
      console.log(this.props.todoStore.allData);
    }

    renderTableRow(){
        let { allUsers } = this.state;
            return allUsers.map( (user) => {
                return <tr>
                        <td>{user.name}</td>
                        <td>{user.company}</td>
                </tr>
           // <div>{user}</div>
        })
    }
    renderTableData() {
        return this.props.allUsers.map((user, index) => {
           return (
              <tr key={user.id}>
                 <td>{user.name}</td>
                 <td>{user.company.name}</td>
                 <td onClick={ ()=> { this.props.openPosts(user.id)}}><p className='viewPosts'>Blog Posts</p></td>
              </tr>
           )
        })
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
    
    render(){
        
        let { allUsers } = this.state;
        console.log(this.state);
        // let formStyle ={
        //      display:'inline-flex',
        //      textAlign: 'justify',
        //      msTextJustify: 'distribute-all-lines',
        //      textJustify: 'distribute-all-lines',
        //      marginTop:'20px'
        // }
    
        //   console.log(oneRow[0]);
          
        return(
            <div className="todo-wrapper">
                <table>
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