import React, { Component } from 'react';
import './App.css';
import TodoApp from './app/TodoApp/TodoApp';
import { Provider } from 'react-redux';
import store from './app/Store';
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoApp />
        </div>
      </Provider>
    );
  }

}

export default App;
