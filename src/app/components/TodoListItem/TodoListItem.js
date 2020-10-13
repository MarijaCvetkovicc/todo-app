import React, { Component } from 'react';

class TodoListItem extends Component {
    deleteTodoTask(event, index) {
        this.props.deleteTodoTask(event, index);
    }
    render() {
        return (
            <div>
                <li className="list-group-item" key={this.props.index}>
                    {this.props.item}
                    <button className="btn btn-sm btn-outline-danger float-right" onClick={this.deleteTodoTask.bind(this)}>X</button>
                </li>
            </div>
        );
    }
}
export default TodoListItem;
