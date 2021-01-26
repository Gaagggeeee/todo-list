import React from 'react';


// Quick way to pass props 
const Todo = ({text, todo, todos, setTodos}) => {

// Delete Handler
    const deleteHandler = () => {
       setTodos(todos.filter((el) => el.id !== todo.id));
    };

// Complete Handler
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed,
                };
            }
            return item;
        }))
    }

    return(
        <>
            <div className='todo'>
                <li className={`todo-item ${todo.completed ? "completed" : ''}`}>
                    {text}
                </li>
                <button className='complete-button' onClick={completeHandler}> 
                    <i  className='fas fa-check'> </i> 
                </button>
                <button className='trash-button' onClick={deleteHandler}> 
                    <i className='fas fa-trash'> </i> 
                </button>
            </div>
        </>
    );
}

export default Todo;