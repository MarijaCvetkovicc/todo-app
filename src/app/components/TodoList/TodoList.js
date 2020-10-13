import React, { Component } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem.js';

class TodoList extends Component {
    deleteTodoTask(event, index) {
        this.props.deleteTodoTask(event, index);
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.todoList.map(
                            (item, index) => {
                                return <TodoListItem deleteTodoTask={this.deleteTodoTask.bind(this)} item={item} index={index} />
                            }
                        )
                    }
                </ul>
            </div>
        );
    }
}
export default TodoList;
