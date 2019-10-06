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
    @observable selectedRhs =  [];
    @observable selectedRhsTxt =  '';
    @observable selectedLhs = '';
    @observable selectedOperator = '';
    @observable allData = [];

    @action addData(){
        this.allData.push({ lhs: this.selectedLhs, rhs: (this.selectedLhs==='Account' || this.selectedLhs === 'Country') ? this.selectedRhs : this.selectedRhsTxt, operator:this.selectedOperator });
        // localStorage.setItem('allData',this.allData);
    }

    @action getData(){
        return this.allData;
    }

    @action counter() {
        this.count++;
        console.log(this.count);
    }
}

export default TodoStore;