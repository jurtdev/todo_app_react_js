import React, { useState } from 'react';
import Todos from './Todos';
import Footer from './Footer';
import './App.css';
import './Toggle.css';

function App() {
  function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      const status = false;
      addTodo(value, status);
      setValue('');
    };

    return (
      <form className='form' onSubmit={handleSubmit}>
        <input
          id='add-todo'
          type='text'
          placeholder=' ADD TODO'
          onChange={(e) => setValue(e.target.value)}></input>
      </form>
    );
  }

  const [todos, setTodos] = useState([
    { task: 'Escort a UFC fighter to the ring.', status: true },
    { task: 'Walk the Camino de Santiago', status: true },
    { task: 'Open for Alice Cooper and Iron Madien', status: true },
    { task: 'Recieve 3 College Diplomas', status: true },
    { task: 'Perform in 8 countries', status: true },
    { task: 'Complete a marathon', status: true },
  ]);

  const addTodo = (task, status) => {
    const newTodos = [...todos, { task, status }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].status = !newTodos[index].status;
    setTodos(newTodos);
  };

  const deleteTodos = () => {
    const newTodos = [];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    const newerTodos = newTodos.filter((x) => {
      return !(newTodos[index].task === x.task);
    });
    setTodos(newerTodos);
  };

  return (
    <div>
      <header>
        <div id='clear-tasks' onClick={() => deleteTodos()}>
          <p>Clear All</p>
        </div>

        <h1>TODO LIST</h1>
        <TodoForm addTodo={addTodo} />
      </header>
      <main>
        <div id='list'>
          <ul id='todo-list'>
            {todos.map((todo, index) => (
              <Todos
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
