import { observable, action } from "mobx";

const initialState = {
    todolist: []
}

class TodoStore {
    constructor() {
      
    }

    @observable todolist = initialState.todolist;
}