import { RequestHandler } from "express"
import { runInNewContext } from "vm"
import { Todo } from "../models/todo"

const ToDOS: Todo[] = []

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text
  const newTodo = new Todo(Math.random().toString(), text)

  ToDOS.push(newTodo)

  res.status(201).json({ message: "Created the todo.", createdTodo: newTodo })
}

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ ToDOS })
}

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id
  const updatedText = (req.body as { text: string }).text

  const todoIndex = ToDOS.findIndex((todo) => todo.id === todoId)

  if (todoIndex < 0) throw new Error("Could not find todo!")

  ToDOS[todoIndex] = new Todo(ToDOS[todoIndex].id, updatedText)

  res.json({ message: "Updated!", updatedTodo: ToDOS[todoIndex] })
}

export const deleteTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id

  const todoIndex = ToDOS.findIndex((todo) => todo.id === todoId)

  if (todoIndex < 0) throw new Error("Could not find todo!")
  ToDOS.splice(todoIndex, 1)
  res.json({ message: "Todo Deleted!" })
}
