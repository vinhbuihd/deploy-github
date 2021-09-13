import React, { useState } from 'react';
import {RiChatDeleteLine} from 'react-icons/ri';
import {FaRegEdit} from 'react-icons/fa';
import TodoForm from './TodoForm';
import './app.scss';


function Todolist({todos, deleteTodo, updateTodo, todoCompelete}) {
    const [edit, setEdit] = useState({
        id: null,
        name: '',
    })
    const handleCompelete = (id) => {
        todoCompelete(id)
    }
    
    const handleDelete = id => {
        deleteTodo(id)
    }

    const submitUpdate = formValue => {
        updateTodo(edit.id, formValue)
        setEdit({
            id: null,
            name: '',
        })
    }
    if (edit.id) {
        return <TodoForm edit={edit} handleSubmit={submitUpdate}/>
    }
    return (
        <ul className='todo-list'>
            {
                todos.map(todo => (
                    <li key={todo.id} className={todo.isComplete ? 'todo-item compelete' : 'todo-item'}>
                        <div className='todo-list-name' onClick={() => handleCompelete(todo.id)}>{todo.name}</div>
                    
                        <div className='todo-list-icon' onClick={() => setEdit({id: todo.id, name: todo.name})}>
                            <FaRegEdit />
                        </div>
                        <div className='todo-list-icon'onClick={() => handleDelete(todo.id)}>
                            <RiChatDeleteLine />   
                        </div>
                        
                    </li>
                ))
            }
        </ul>
    );
}

export default Todolist;