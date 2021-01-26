import React from 'react';
import Todo from './todo';

const TodoList = ({ todos, setTodos, filterTodos }) => {
    return (
        <>
            <div className='todo-container'>
                <ul className='todo-list'>
{/* For every todo render the Todo component */}
                    {filterTodos.map((todo) => (
                        <Todo 
                            text={todo.text} 
                            key={todo.id}
                            todos={todos} 
                            setTodos={setTodos}
                            todo={todo}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TodoList;