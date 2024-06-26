// src/components/AddTodo.js
import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState('');

    const handleAdd = () => {
        if (todo) {
            addTodo(todo);
            setTodo('');
        }
    };

    return (
        <div className="add-todo">
            <input
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <button onClick={handleAdd}>添加事务</button>
        </div>
    );
};

export default AddTodo;
