import { useState } from 'react'

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)
  const [editDueDate, setEditDueDate] = useState(todo.dueDate)

  const handleSave = () => {
    if (!editTitle.trim()) return
    onUpdate(todo.id, editTitle.trim(), editDueDate)
    setEditing(false)
  }

  const handleCancel = () => {
    setEditTitle(todo.title)
    setEditDueDate(todo.dueDate)
    setEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') handleCancel()
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {editing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <input
            type="date"
            value={editDueDate}
            onChange={e => setEditDueDate(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSave}>保存</button>
          <button onClick={handleCancel}>取消</button>
        </div>
      ) : (
        <div className="todo-view">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span className="todo-title">{todo.title}</span>
          {todo.dueDate && (
            <span className="todo-date">{todo.dueDate}</span>
          )}
          <button onClick={() => setEditing(true)}>编辑</button>
          <button onClick={() => onDelete(todo.id)}>删除</button>
        </div>
      )}
    </li>
  )
}
