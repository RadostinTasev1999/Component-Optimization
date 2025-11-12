import './App.css'
import TodoList from './components/TodoList'
import Counter from './components/Counter'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>ToDo List</h1>

      <TodoList />

      <Counter count={count} setCount={setCount} />
    </>
  )
}

export default App