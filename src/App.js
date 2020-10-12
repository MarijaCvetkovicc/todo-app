import React, { Component } from 'react';
import './App.css';

class App extends Component{

  state={
    todoList:[]    
  }
  deleteTodoTask = (event, index) =>{
    var taskArray=[...this.state.todoList];
    taskArray.splice(index,1);
    this.setState({todoList:taskArray});
  }
  AddTodoTask = (event) => {
    var taskDesc = event.target.elements.todoTask.value;
    if(taskDesc.length > 0){
      this.setState({
        todoList:[...this.state.todoList, taskDesc]
      });
      event.target.reset();

    }
    event.preventDefault();
  }
  render(){
  return (
    <div>
      <div className="jumbotron jumbotron-fluid py-2">
      <div className="container">
      <h1 className="display-4">List of Todos</h1>
      </div>
      </div>
  <form className="mb-3" onSubmit={this.AddTodoTask}> 
  <div className="input-group">
    <input type="text" name="todoTask" className="form-control" placeholder="Enter text here..." autoComplete="off"/>
    <div className="input-group-append">
      <button type="submit" className="btn btn-outline-success">Add</button>
    </div>
    </div>
  </form>

    <ul className="list-group">
    {
      this.state.todoList.map(
        (item,index) => {
          return <li className="list-group-item" key={index}>
            {item}
            <button className="btn btn-sm btn-outline-danger float-right" onClick={(event)=>{this.deleteTodoTask(event,index)}}>X</button>
          </li>
        }
      )
    }
    </ul>

  </div>
  );
  }

}


export default App;
