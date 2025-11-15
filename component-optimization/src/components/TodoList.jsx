import TodoItem from "./TodoItem"
import { useState, useCallback } from "react"
import React from 'react'
import { useMemo } from "react"


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

/*
    useMemo is a React Hook that lets you cache result of a calculation between re-renders.
*/
    const heavyCalculation = useMemo(() => {
      //Heavy calculation

      function pauseComp(ms) {
        var curr = new Date().getTime(); //It gets the current time in milliseconds since the Unix epoch and stores it in the curr variable.
        ms += curr; // It calculates the target end time by adding the desired pause duration (ms) to the current time (curr).
        while(curr < ms){
          curr = new Date().getTime()
        }
        /*
        This is the core of the pause mechanism. The program enters a while loop that continuously checks the current time. 
        It stays in this loop, doing nothing but repeatedly fetching the current time, until the current time (curr) is equal to or greater than the calculated end time (ms).
        */
      }

      pauseComp(1000)
      /*
      The line pauseComp(1000) calls the function to pause the program's execution for 1000 milliseconds (1 second).
      */

      return 42;
    },[])

    


    return (
        <>
        <h2>Todos</h2>
            <ul>
                {
                  todos.map(todo => <TodoItem {...todo} onToggle={toggleTodoHandler} />)
                }
            </ul>

            <p>Meaning of life: { heavyCalculation }</p>
        </>
   )
}

export default React.memo(TodoList)