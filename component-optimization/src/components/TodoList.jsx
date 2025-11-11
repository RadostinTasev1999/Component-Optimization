import TodoItem from "./TodoItem"
import { useState } from "react"

const initialTodos = [
    { id: 1,text: 'Do homework', isCompleted: false},
    { id:2, text: 'Cook meal', isCompleted: false },
    { id: 3, text: 'Fitness', isCompleted: false}
]

export default function TodoList(){

    const [ todos, setTodos ] = useState(initialTodos)

    const toggleTodoHandler = (todoId) => {
        console.log('TodoId is:', todoId )

        setTodos(state => state.map(todo => todoId === todo.id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    }

    return (
        <>
        <h2>Todos</h2>
            <ul>
                {
                  todos.map(todo => <TodoItem {...todo} onToggle={toggleTodoHandler} />)
                }
            </ul>
        </>
   )
}