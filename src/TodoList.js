import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
		const todos = this.props.todoList;
		const ToDoList = todos.map((todo) =>
			<li> <Todo todo={todo}/> </li>
		);
        return (  
           <ul>{ToDoList}</ul>
        );
    }

}