const STORAGE_KEY = 'postgrad-plan-v2'

export const CATEGORIES = ['比赛', '论文', '英语', '项目', '基础能力']

export const CATEGORY_META = {
  '比赛': { color: '#d97706', bg: '#fffbeb', border: '#fcd34d' },
  '论文': { color: '#7c3aed', bg: '#f5f3ff', border: '#c4b5fd' },
  '英语': { color: '#0891b2', bg: '#ecfeff', border: '#67e8f9' },
  '项目': { color: '#059669', bg: '#ecfdf5', border: '#6ee7b7' },
  '基础能力': { color: '#4f46e5', bg: '#eef2ff', border: '#a5b4fc' },
}

export const PHASES = [
  { key: 'now-aug', label: '现在 ~ 8月' },
  { key: 'sep', label: '9月' },
  { key: 'oct-dec', label: '10月 ~ 12月' },
  { key: 'jan-feb', label: '1月 ~ 2月' },
  { key: 'mar+', label: '3月+' },
]

export const STATUS_LABEL = {
  pending: '待开始',
  in_progress: '进行中',
  completed: '已完成',
}

function load() {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw) {
    try { return JSON.parse(raw) } catch { /* corrupted data, reset */ }
  }
  save([])
  return []
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

let nextId = (() => {
  const data = load()
  return data.length > 0 ? Math.max(...data.map(d => d.id)) + 1 : 1
})()

export function getPlans() {
  return load()
}

export function getStats() {
  const data = load()
  return {
    total: data.length,
    inProgress: data.filter(d => d.status === 'in_progress').length,
    completed: data.filter(d => d.status === 'completed').length,
    pending: data.filter(d => d.status === 'pending').length,
  }
}

export function addPlan({ title, category, phase, dueDate, notes }) {
  const data = load()
  const item = {
    id: nextId++,
    title,
    category,
    phase,
    dueDate,
    status: 'pending',
    notes,
    createdAt: Date.now(),
  }
  data.push(item)
  save(data)
  return getPlans()
}

export function updatePlan(id, updates) {
  const data = load()
  const item = data.find(d => d.id === id)
  if (item) Object.assign(item, updates)
  save(data)
  return getPlans()
}

export function deletePlan(id) {
  const data = load()
  save(data.filter(d => d.id !== id))
  return getPlans()
}

export function cycleStatus(id) {
  const order = ['pending', 'in_progress', 'completed']
  const data = load()
  const item = data.find(d => d.id === id)
  if (item) {
    const idx = order.indexOf(item.status)
    item.status = order[(idx + 1) % 3]
  }
  save(data)
  return getPlans()
}
