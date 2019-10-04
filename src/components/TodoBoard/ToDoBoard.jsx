import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import TodoList from "../TodoList/TodoList";
import "./ToDoBoard.scss";

@inject('todoStore')
@observer class ToDoBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.updateCounter();
        
    }

    updateCounter() {
        this.props.todoStore.counter();
        console.log(this.props);
        this.props.todoStore.counter();
        console.log(this.props);
    }
    
    render(){
        console.log()
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