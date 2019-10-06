import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import TodoList from "../TodoList/TodoList";
import "./ToDoBoard.scss";
import appConstants from '../../constants/appConstants';
import  Button from 'react-bootstrap/Button';


@observer class oneRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLhs:'',
            allData:[],
            selectedRhs:[],
            selectedOperator:'',
            selectedRhsTxt:''
        }
    }

    componentDidMount() {
        this.setState({ allData: appConstants.renderObject });
        
    }
    renderFirstCol = (firstColList) => {
        return firstColList.map((e,index)=>{
           return   <option key={index} value={e.lhs}>{e.lhs}</option> ;
            
        });
    }
    handleChange = (e) => {
        this.setState({selectedLhs: e.target.value});
        this.props.todoStore.selectedLhs =  e.target.value;
        console.log(this.props.todoStore.selectedLhs);
    }

    saveOperator = (e) =>{
        console.log(e.target.value);
        debugger;
        this.setState({selectedOperator: e.target.value});
        this.props.todoStore.selectedOperator =  e.target.value;
    }
    saveRhs = (e)=>{
        let {selectedLhs } = this.state;
        var options = e.target.options;
        let value = [];
        if(selectedLhs === 'Account' || selectedLhs === 'Country'){
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        this.setState({selectedRhs: value});
        this.props.todoStore.selectedRhs = value;
    }else{
        this.setState({selectedRhsTxt: value});
        this.props.todoStore.selectedRhsTxt = value;
    }
        
        this.props.todoStore.addData();
    }
    
    render(){
        let oneRow = this.state.allData.filter(e => {
            return e.lhs === this.state.selectedLhs
          })
        //   console.log(oneRow[0]);
          
        return(
                <div className="todo-input-box">
                    <select value={this.state.selectedLhs} onChange={this.handleChange.bind(this)}>
                        {this.renderFirstCol(appConstants.renderObject)}
                    </select>
                    {  (oneRow.length!==0)  ? <select onChange={this.saveOperator.bind(this)} >
                            {
                    
                                oneRow[0].operator.map((op, i) => {
                                return <option>{op}</option>
                                }) 
                            }
                            </select>  : null
                    }
                    {  (oneRow.length!==0)   ?  ( (oneRow[0].rhs) ? <select className="mdb-select md-form" onChange={this.saveRhs.bind(this)} multiple>
                        {
                            oneRow[0].rhs.map((op, i) => {
                            return <option>{op}</option>
                            }) 
                       
                        }
                        </select>  : (this.selectedLhs === 'Campaign Name')  ? <input onChange={this.saveRhs.bind(this)} type="text"/> : <input onChange={this.saveRhs.bind(this)}   pattern='^\d*(\.\d{0,2})?$' type="text"/> 
                     ) : null
                    }

                </div>
        )
    }
}

export default oneRow;