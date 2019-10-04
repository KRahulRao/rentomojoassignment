import { observable, action } from "mobx";

const initialState = {
    todolist: [],
    count: 0
}

class TodoStore {
    constructor() {
      
    }

    @observable todolist = initialState.todolist;
    @observable count = initialState.count;

    @action counter() {
        this.count++;
        console.log(this.count);
    }
}

export default TodoStore;