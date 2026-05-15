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

const SEED = [
  { id: 1, title: '精英杯比赛', category: '比赛', phase: 'now-aug', dueDate: '', status: 'in_progress', notes: '分主次，数模是主战场' },
  { id: 2, title: '三创比赛收尾', category: '比赛', phase: 'now-aug', dueDate: '', status: 'in_progress', notes: '校赛已完成，等待省赛结果，恩施线下赛待定' },
  { id: 3, title: '数模培训 — Python/MATLAB数据处理', category: '比赛', phase: 'now-aug', dueDate: '', status: 'in_progress', notes: '重点一：pandas, numpy, matplotlib' },
  { id: 4, title: '数模培训 — 常见模型模板', category: '比赛', phase: 'now-aug', dueDate: '', status: 'pending', notes: '重点二：回归、分类、聚类、优化、评价类' },
  { id: 5, title: '数模培训 — 论文写作模板', category: '比赛', phase: 'now-aug', dueDate: '', status: 'pending', notes: '重点三：LaTeX/Word排版，图表规范' },
  { id: 27, title: '华数杯全国大学生数学建模竞赛', category: '比赛', phase: 'now-aug', dueDate: '2026-08-01', status: 'pending', notes: '8月初，国赛前最重要的模拟赛，检验培训成果' },
  { id: 6, title: '每天背30个英语单词', category: '英语', phase: 'now-aug', dueDate: '', status: 'in_progress', notes: '用墨墨背单词/不背单词，选考研词汇书。坚持比量重要' },
  { id: 7, title: '统计建模论文找候选期刊', category: '论文', phase: 'now-aug', dueDate: '', status: 'pending', notes: '知网搜选题方向 → 列出3-5个候选期刊 → 给老师判断。重点看省级期刊和本科学报' },
  { id: 8, title: '联系导师沟通论文投稿', category: '论文', phase: 'now-aug', dueDate: '', status: 'pending', notes: '老师已同意帮忙' },
  { id: 9, title: '建GitHub主页整理比赛代码', category: '基础能力', phase: 'now-aug', dueDate: '', status: 'pending', notes: '比赛代码、论文、项目都放上去，复试时直接给导师看' },
  { id: 10, title: '找目标院校导师并读其论文', category: '基础能力', phase: 'now-aug', dueDate: '', status: 'pending', notes: '读目标导师近两年论文，了解研究方向。复试时提到读过导师论文会有奇效' },
  { id: 11, title: '恩施线下赛（待定）', category: '比赛', phase: 'now-aug', dueDate: '', status: 'pending', notes: '三创赛后续，进省赛则去' },
  { id: 12, title: '高教社杯全国大学生数学建模竞赛（国赛）— 全力冲刺', category: '比赛', phase: 'sep', dueDate: '2026-09-10', status: 'pending', notes: '全年最重要赛事（9月10-13日）。头号目标。其他数模赛参考：五一赛(5月)、数维杯(5月/10月)、MathorCup(4月)、中青杯(6月)、APMCP亚太赛(11月)' },
  { id: 13, title: '英语四级备考', category: '英语', phase: 'sep', dueDate: '', status: 'pending', notes: '大二暑假前通过' },
  { id: 14, title: '统计建模论文扩展后投期刊', category: '论文', phase: 'oct-dec', dueDate: '', status: 'pending', notes: '普刊/省级期刊/会议论文，周期约3-6个月' },
  { id: 15, title: '数模论文整理转化第二篇论文', category: '论文', phase: 'oct-dec', dueDate: '', status: 'pending', notes: '数模论文稍加修改就是一篇小论文' },
  { id: 16, title: '启动独立项目开发', category: '项目', phase: 'oct-dec', dueDate: '', status: 'pending', notes: '智能应用方向：带推荐/预测功能的完整Web系统，展示全栈+AI能力。每周5-8小时，2-3个月完成' },
  { id: 17, title: '英语六级备考', category: '英语', phase: 'oct-dec', dueDate: '', status: 'pending', notes: '大三上过六级，目标500+' },
  { id: 18, title: '吴恩达Machine Learning课程', category: '基础能力', phase: 'oct-dec', dueDate: '', status: 'pending', notes: '整理课程作业到GitHub。软工智能方向默认你懂ML基础，面试要能答上来' },
  { id: 19, title: '独立项目部署上线', category: '项目', phase: 'jan-feb', dueDate: '', status: 'pending', notes: '部署到线上，GitHub开源，复试时当场打开演示' },
  { id: 20, title: '英语六级冲刺', category: '英语', phase: 'jan-feb', dueDate: '', status: 'pending', notes: '' },
  { id: 21, title: '软考中级（软件设计师）备考', category: '基础能力', phase: 'jan-feb', dueDate: '', status: 'pending', notes: '证书证明基础扎实，大三开学前考' },
  { id: 28, title: '美国大学生数学建模竞赛 MCM/ICM（美赛）', category: '比赛', phase: 'jan-feb', dueDate: '2027-01-28', status: 'pending', notes: '2027年1月28日-2月1日（北京时间1月29日6:00-2月2日9:00），全英文写作。建议大三上11月先参加APMCM亚太赛练手，赛制接近美赛' },
  { id: 22, title: '正式开始考研初试复习', category: '基础能力', phase: 'mar+', dueDate: '', status: 'pending', notes: '' },
  { id: 23, title: '论文录用结果到手', category: '论文', phase: 'mar+', dueDate: '', status: 'pending', notes: '复试时有两篇已发表/录用论文，直接碾压80%考生' },
  { id: 24, title: '准备复试英文自我介绍', category: '英语', phase: 'mar+', dueDate: '', status: 'pending', notes: '读2-3篇目标方向英文论文摘要，练到能口头翻译。英日语双外语是亮点' },
  { id: 25, title: '整理复试简历', category: '基础能力', phase: 'mar+', dueDate: '', status: 'pending', notes: '量化成果：数字和产出，不是罗列经历。数模论文打印带进复试现场' },
  { id: 26, title: '给目标导师发套磁邮件', category: '基础能力', phase: 'mar+', dueDate: '', status: 'pending', notes: '附简历、论文链接、GitHub、项目演示。邮件简短：自我介绍 + 读过他的论文 + 你的成果 + 表达意愿' },
]

function load() {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw) return JSON.parse(raw)
  save(SEED)
  return SEED
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
