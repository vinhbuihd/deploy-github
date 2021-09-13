import React, { useRef, useState, useEffect } from 'react';
import './app.scss';



function TodoForm({handleSubmit, edit}) {

    const [input, setInput] = useState(edit ? edit.name : '');
    const refValue = useRef(null);
    useEffect(() => {
        refValue.current.focus();
    })

    const handleChangeInput = e => setInput(e.target.value);
    const onFormSubmit = e => {
        e.preventDefault();
        if (!handleSubmit) return;
        const formValue = {
            id: new Date().getTime(),
            name: input,
        }
        handleSubmit(formValue);
        setInput('');
    }
    return (
        <form onSubmit={onFormSubmit}>
            {edit ? (
                <>
                    <input 
                        type='text'
                        value={input}
                        onChange={handleChangeInput}
                        placeholder='Update Todo'
                        ref={refValue}
                    />
                    <button type="submit">Update</button>
                </>
            ) : (
                <>
                    <input 
                        type='text'
                        value={input}
                        onChange={handleChangeInput}
                        placeholder='Add a Todo'
                        ref={refValue}
                    />
                    <button type="submit">Add Todo</button>
                </>
            )}
        </form>
    );
}

export default TodoForm;