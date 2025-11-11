export default function TodoItem({
    id,
    text,
    isCompleted,
    onToggle
}){
    return (
        <li onClick={() => onToggle(id)} style={isCompleted ? { textDecoration: 'line-through'} : {}}>
            {
                text
            }
        </li>
    )
}