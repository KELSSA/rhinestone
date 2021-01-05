import React from 'react';


const ListTodo =({todos,deleteTodo})=>{
 

    return(
      
        <ul>
            { 
                todos && todos.length > 0 ? (todos.map(todo=>{
                return(
                    <li className=" todos" key={ todo._id} onClick={()=>deleteTodo(todo._id)}>{todo.action} </li>
                )
            })) : (<li>no task (s) left</li> )

        }
        </ul>
    )
}

export default ListTodo