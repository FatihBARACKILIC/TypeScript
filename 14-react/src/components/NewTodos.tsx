import React, { useRef } from "react"
import "./../css/NewTodo.css"

interface NewTodosProps {
  onAddTodo: (todoText: string) => void
}

const NewTodos: React.FC<NewTodosProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null)
  const { onAddTodo } = props

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = textInputRef.current!.value
    onAddTodo(enteredText)
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" name="todo-text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodos
