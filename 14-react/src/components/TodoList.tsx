import React from "react"
import "./../css/TodoList.css"

interface TodoListProps {
  items: { id: string; text: string }[]
  onDeleteTodo: (todoId: string) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { items, onDeleteTodo } = props

  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
