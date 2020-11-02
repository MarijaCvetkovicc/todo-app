import React, { Component } from 'react';
import TodoApp from './app/TodoApp/TodoApp';
import TodoEdit from './app/components/TodoEdit/TodoEdit';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={TodoApp} />
          <Route path="/todos" exact component={TodoApp} />
          <Route path="/todos/:id" component={TodoEdit} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
