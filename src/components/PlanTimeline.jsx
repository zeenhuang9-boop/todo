import { CATEGORY_META, PHASES } from '../db.js'
import PlanItem from './PlanItem'

export default function PlanTimeline({ plans, onStatusCycle, onDelete, onUpdate, activeFilter }) {
  return (
    <div className="timeline">
      {PHASES.map(phase => {
        const phasePlans = plans.filter(p => {
          if (p.phase !== phase.key) return false
          if (activeFilter && p.category !== activeFilter) return false
          return true
        })

        // Group by category within phase
        const grouped = {}
        for (const p of phasePlans) {
          if (!grouped[p.category]) grouped[p.category] = []
          grouped[p.category].push(p)
        }

        return (
          <div key={phase.key} className="phase-section">
            <div className="phase-header">
              <h2>{phase.label}</h2>
              <span className="phase-count">{phasePlans.length} 项</span>
            </div>
            {phasePlans.length === 0 ? (
              <p className="phase-empty">暂无事项</p>
            ) : (
              Object.entries(grouped).map(([cat, items]) => {
                const meta = CATEGORY_META[cat] || {}
                return (
                  <div key={cat} className="cat-group">
                    <div className="cat-group-label" style={{ color: meta.color }}>
                      {cat}
                    </div>
                    {items.map(item => (
                      <PlanItem
                        key={item.id}
                        item={item}
                        onStatusCycle={onStatusCycle}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                      />
                    ))}
                  </div>
                )
              })
            )}
          </div>
        )
      })}
    </div>
  )
}
