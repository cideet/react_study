/**
 * Created by sf on 2017/7/4.
 */

import React from 'react';
import {render} from 'react-dom';

import Input from '../../components/Input/index.jsx';
import List from '../../components/List/index.jsx';

class Todo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: []
        }
    }

    render() {
        return (
            <div>
                <Input fnByInputModule={this.submitFn.bind(this)}/>
                <List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)}/>
            </div>
        )
    }

    submitFn(value) {
        const id = this.state.todos.length;
        this.setState({
            todos: this.state.todos.concat({
                id: id,
                text: value
            })
        });
        console.log(this.state.todos);
    }

    deleteFn(id) {
        let data = this.state.todos;
        this.setState({
            todos: data.filter(item=> {
                if (item.id !== id) {
                    return item;
                }
            })
        });
        console.log(data);
    }
}

export default Todo;
