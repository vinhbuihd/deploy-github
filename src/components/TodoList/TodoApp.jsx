import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './app.scss';

function TodoApp() {
    const [todos, setTodos] = useState([{id: 1, name: 'Học Lập Trình'}, {id: 2, name: 'Gọi điện cho Gấu'}]);
    const addTodo = formValue => {
        if(!formValue.name || /^\s*$/.test(formValue.name)) return;
        const newTodos = [formValue, ...todos];
        setTodos(newTodos);
    }

    const updateTodo = (todoId, formValue) => {
        if(!formValue.name || /^\s*$/.test(formValue.name)) return;
        setTodos(prev => prev.map(todo => todo.id === todoId ? formValue : todo))
    }
    const deleteTodo = id => {
        const newTodos = [...todos].filter(todo => todo.id !== id);
        setTodos(newTodos);
    }
    const compeleteTodo = (id) => {
        let updatedTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodo);
    }
    return (
        <div className='app'>
            <div className='wrapper'>
            <h1>Today, What is your plan?</h1>
            <TodoForm handleSubmit={addTodo}/>
            <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} todoCompelete={compeleteTodo}/>
        </div>
        </div>
        
    );
}

export default TodoApp;