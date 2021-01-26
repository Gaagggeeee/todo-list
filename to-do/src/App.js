import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/form';
import TodoList from './components/todolist';

function App() {



//Form Input set state
  const [inputText, setInputText] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);

  // Run Once when the app starts or refresh
  useEffect(() => {
    getLocalTodos();
  }, []);

// Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status ]);



// Functions

const filterHandler = () => {
  switch(status){
    case 'completed': 
      setFilterTodos(todos.filter(todo => todo.completed === true))
      break;
    case 'uncompleted': 
      setFilterTodos(todos.filter(todo => todo.completed === false))
      break;
    default: 
      setFilterTodos(todos);
      break;
  }
}


//Save to local storage 
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };

// Checking if you have todos saved
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
     let todoLocal = JSON.parse(localStorage.getItem('todos'));
     setTodos(todoLocal);
    }
  };

  return (
    <> 
      <header>
        <h1>Todo List</h1>
      </header>
{/* passing props to form */}
      <Form 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filterTodos={filterTodos}
      />
    </>
  );
}

export default App;
