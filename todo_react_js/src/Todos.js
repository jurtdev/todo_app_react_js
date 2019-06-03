import React from 'react';

export default function Todos({todo, index, completeTodo, deleteTodo}) {

    return (
        <li style={{backgroundColor: todo.status ? '#14A76C' : '#FFE400' }}>
            <label className="toggle">
                <input onClick={() => completeTodo(index)} 
                       className="toggle__input" 
                       type="checkbox" checked={todo.status}/>
                    <span className="toggle__label"> 
                        <span className="toggle__text"></span>
                    </span>  
            </label>
            <p>{todo.task}</p>
            <span onClick={() => deleteTodo(index)} className="deleteBtn">X</span>
        </li>    
    )
}
