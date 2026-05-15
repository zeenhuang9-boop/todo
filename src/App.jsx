import { useState } from 'react'
import { getPlans, getStats, addPlan, deletePlan, updatePlan, cycleStatus, CATEGORIES } from './db.js'
import AddPlan from './components/AddPlan'
import PlanTimeline from './components/PlanTimeline'
import './App.css'

export default function App() {
  const [plans, setPlans] = useState(() => getPlans())
  const [stats, setStats] = useState(() => getStats())
  const [showAdd, setShowAdd] = useState(false)
  const [activeFilter, setActiveFilter] = useState(null)

  const refresh = (newPlans) => {
    setPlans(newPlans)
    setStats(getStats())
  }

  const handleAdd = (data) => {
    refresh(addPlan(data))
    setShowAdd(false)
  }

  const handleDelete = (id) => {
    refresh(deletePlan(id))
  }

  const handleUpdate = (id, updates) => {
    refresh(updatePlan(id, updates))
  }

  const handleStatusCycle = (id) => {
    refresh(cycleStatus(id))
  }

  const completionRate = stats.total > 0
    ? Math.round((stats.completed / stats.total) * 100)
    : 0

  return (
    <div className="app">
      <header className="app-header">
        <h1>考研复试备战规划</h1>
        <p className="subtitle">软工智能 · 大二下学期 · 目标：复试中拔得头筹</p>
      </header>

      <div className="stats">
        <div className="stat-card">
          <div className="stat-num" style={{ color: '#1677ff' }}>{stats.total}</div>
          <div className="stat-label">全部事项</div>
        </div>
        <div className="stat-card">
          <div className="stat-num" style={{ color: '#d97706' }}>{stats.inProgress}</div>
          <div className="stat-label">进行中</div>
        </div>
        <div className="stat-card">
          <div className="stat-num" style={{ color: '#059669' }}>{stats.completed}</div>
          <div className="stat-label">已完成</div>
        </div>
        <div className="stat-card">
          <div className="stat-num" style={{ color: '#7c3aed' }}>{completionRate}%</div>
          <div className="stat-label">完成率</div>
        </div>
      </div>

      <div className="filter-bar">
        <span
          className={`filter-chip ${activeFilter === null ? 'active' : ''}`}
          onClick={() => setActiveFilter(null)}
        >
          全部
        </span>
        {CATEGORIES.map(cat => (
          <span
            key={cat}
            className={`filter-chip ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(activeFilter === cat ? null : cat)}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="add-bar">
        {showAdd ? (
          <AddPlan onAdd={handleAdd} onCancel={() => setShowAdd(false)} />
        ) : (
          <button className="add-btn" onClick={() => setShowAdd(true)}>
            + 添加规划事项
          </button>
        )}
      </div>

      <PlanTimeline
        plans={plans}
        activeFilter={activeFilter}
        onStatusCycle={handleStatusCycle}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  )
}
