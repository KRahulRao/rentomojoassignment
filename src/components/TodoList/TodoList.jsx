import React, { Component } from 'react';
import "./TodoList.scss";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="list-wrapper">
                <ul>
                    <li>
                        <span className="list-item">Todo 1</span>
                        <span className="delete-icon"></span>
                    </li>
                    <li>
                        <span className="list-item">Todo 2</span>
                        <span className="delete-icon"></span>
                    </li>
                    <li>
                        <span className="list-item">Todo 3</span>
                        <span className="delete-icon"></span>
                    </li>
                    <li>
                        <span className="list-item">Todo 4</span>
                        <span className="delete-icon"></span>
                    </li>
                    <li>
                        <span className="list-item">Todo 5</span>
                        <span className="delete-icon"></span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TodoList;