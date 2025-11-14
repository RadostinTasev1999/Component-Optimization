import { memo } from "react"

function TodoItem({
    id,
    text,
    isCompleted,
    onToggle
}){

    console.log(`${text} -> re-renders`)

    return (
        <li onClick={() => onToggle(id)} style={isCompleted ? { textDecoration: 'line-through'} : {}}>
            {
                text
            }
        </li>
    )
}

export default memo(TodoItem)