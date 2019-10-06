import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import TodoList from "../TodoList/TodoList";
import "./ToDoBoard.scss";
import Onerow from './oneRow';
import Button from 'react-bootstrap/Button';

@inject('todoStore')
@observer class ToDoBoard extends Component {
    constructor(props) {
        super(props);
        this.addNewRow = this.addNewRow.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
           allData:[],
           totalData:[],
        }
    }

    componentDidMount() {
  
        
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
    
    render(){
        let formStyle ={
             display:'inline-flex',
             textAlign: 'justify',
             msTextJustify: 'distribute-all-lines',
             textJustify: 'distribute-all-lines',
             marginTop:'20px'
        }
    
        //   console.log(oneRow[0]);
          
        return(
            <div className="todo-wrapper">
                {this.state.allData}
                <div style={formStyle}>
                <Button style={{display:'inline-block'}} onClick={this.addNewRow}>Add New Row</Button>
                <Button style={{ float:'right',marginLeft:'145px',position:'relative' }} onClick={this.submit}>Apply</Button>
                </div>
            </div>
            
        )
    }
}

export default ToDoBoard;