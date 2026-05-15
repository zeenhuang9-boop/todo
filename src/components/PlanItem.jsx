import { useState } from 'react'
import { CATEGORIES, CATEGORY_META, PHASES, STATUS_LABEL } from '../db.js'

export default function PlanItem({ item, onStatusCycle, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [editTitle, setEditTitle] = useState(item.title)
  const [editDueDate, setEditDueDate] = useState(item.dueDate)
  const [editCategory, setEditCategory] = useState(item.category)
  const [editPhase, setEditPhase] = useState(item.phase)
  const [editNotes, setEditNotes] = useState(item.notes)

  const meta = CATEGORY_META[item.category] || CATEGORY_META['基础能力']

  const statusStyle = {
    pending: { color: '#9ca3af', borderColor: '#d1d5db', bg: '#fff' },
    in_progress: { color: '#d97706', borderColor: '#fcd34d', bg: '#fffbeb' },
    completed: { color: '#059669', borderColor: '#6ee7b7', bg: '#ecfdf5' },
  }[item.status]

  const handleSave = () => {
    if (!editTitle.trim()) return
    onUpdate(item.id, {
      title: editTitle.trim(),
      dueDate: editDueDate,
      category: editCategory,
      phase: editPhase,
      notes: editNotes,
    })
    setEditing(false)
  }

  const handleCancel = () => {
    setEditTitle(item.title)
    setEditDueDate(item.dueDate)
    setEditCategory(item.category)
    setEditPhase(item.phase)
    setEditNotes(item.notes)
    setEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSave()
    }
    if (e.key === 'Escape') handleCancel()
  }

  return (
    <div className={`plan-item ${item.status === 'completed' ? 'completed' : ''}`}>
      {editing ? (
        <div className="plan-item-edit">
          <div className="edit-row">
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
          </div>
          <div className="edit-row">
            <select value={editCategory} onChange={e => setEditCategory(e.target.value)}>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={editPhase} onChange={e => setEditPhase(e.target.value)}>
              {PHASES.map(p => <option key={p.key} value={p.key}>{p.label}</option>)}
            </select>
          </div>
          <textarea
            value={editNotes}
            onChange={e => setEditNotes(e.target.value)}
            placeholder="备注（可选）"
            onKeyDown={handleKeyDown}
          />
          <div className="edit-btn-row">
            <button className="edit-btn-save" onClick={handleSave}>保存</button>
            <button className="edit-btn-cancel" onClick={handleCancel}>取消</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="plan-item-row">
            <span
              className="cat-badge"
              style={{ background: meta.bg, color: meta.color, border: `1px solid ${meta.border}` }}
            >
              {item.category}
            </span>
            <span className="plan-title">{item.title}</span>
            {item.dueDate && <span className="plan-date">{item.dueDate}</span>}
            <button
              className="status-badge"
              style={{ color: statusStyle.color, borderColor: statusStyle.borderColor, background: statusStyle.bg }}
              onClick={() => onStatusCycle(item.id)}
              title="点击切换状态"
            >
              {STATUS_LABEL[item.status]}
            </button>
            {item.notes && (
              <span className="plan-notes-toggle" onClick={() => setExpanded(!expanded)}>
                {expanded ? '收起 ▲' : '备注 ▼'}
              </span>
            )}
            <div className="plan-actions">
              <button onClick={() => setEditing(true)}>编辑</button>
              <button onClick={() => onDelete(item.id)}>删除</button>
            </div>
          </div>
          {expanded && item.notes && (
            <div className="plan-notes">{item.notes}</div>
          )}
        </div>
      )}
    </div>
  )
}
