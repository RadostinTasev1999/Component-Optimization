import TodoItem from "./TodoItem"
import { useState, useCallback } from "react"
import React from 'react'


const initialTodos = [
    { id: 1,text: 'Do homework', isCompleted: false},
    { id:2, text: 'Cook meal', isCompleted: false },
    { id: 3, text: 'Fitness', isCompleted: false}
]

function TodoList(){

    const [ todos, setTodos ] = useState(initialTodos)

    const toggleTodoHandler = useCallback((todoId) => {
        console.log('TodoId is:', todoId )

        setTodos(state => state.map(todo => todoId === todo.id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    },[])

    return (
        <>
        <h2>Todos</h2>
            <ul>
                {
                  todos.map(todo => <TodoItem {...todo} onToggle={toggleTodoHandler} />)
                  /*
                  memo(<calculated value>) 
                  calculated value - the function calculating the value that you want to cache.
                                   - React will call your function during the initial render
                                   - On next renders, React will return the same value again, if the
                                     dependencies have not changed since the last render.
                                   - Otherwise, it will call calculateValue, return its result and store it
                                     so it can be re-used later.


                  */
                }
            </ul>
        </>
   )
}

export default React.memo(TodoList)