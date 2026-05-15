import { useState } from 'react'

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title.trim(), dueDate)
    setTitle('')
    setDueDate('')
  }

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="输入待办事项..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        autoFocus
      />
      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <button type="submit">添加</button>
    </form>
  )
}
