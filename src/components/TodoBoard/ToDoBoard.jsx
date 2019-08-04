import React, { Component } from 'react';
import TodoList from "../TodoList/TodoList";
import "./ToDoBoard.scss";

class ToDoBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render(){
        return(
            <div className="todo-wrapper">
                <div className="todo-input-box">
                    <input type="text" className="form-control" />
                </div>
                <TodoList />
            </div>
        )
    }
}

export default ToDoBoard;