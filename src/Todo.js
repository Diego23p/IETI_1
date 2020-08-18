import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
		const todo = this.props.todo; 
        return (  
          <h2>Text: {todo.text} Priority: {todo.priority}</h2> 
        );
    }

}