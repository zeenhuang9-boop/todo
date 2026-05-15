import { useState } from 'react'
import { CATEGORIES, PHASES } from '../db.js'

export default function AddPlan({ onAdd, onCancel }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('比赛')
  const [phase, setPhase] = useState('now-aug')
  const [dueDate, setDueDate] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd({ title: title.trim(), category, phase, dueDate, notes: notes.trim() })
    setTitle('')
    setDueDate('')
    setNotes('')
  }

  return (
    <form className="add-plan" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          placeholder="输入规划事项..."
          value={title}
          onChange={e => setTitle(e.target.value)}
          autoFocus
        />
        <input
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        />
      </div>
      <div className="form-row">
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={phase} onChange={e => setPhase(e.target.value)}>
          {PHASES.map(p => <option key={p.key} value={p.key}>{p.label}</option>)}
        </select>
      </div>
      <div className="form-row">
        <textarea
          placeholder="备注（可选）"
          value={notes}
          onChange={e => setNotes(e.target.value)}
          rows={2}
        />
      </div>
      <div className="btn-row">
        <button type="button" className="btn-cancel" onClick={onCancel}>取消</button>
        <button type="submit" className="btn-submit">添加</button>
      </div>
    </form>
  )
}
