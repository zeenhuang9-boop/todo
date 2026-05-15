# Todo App Design

## Overview
个人使用的最简版待办事项提醒工具，React + Vite + sql.js，数据存储在浏览器本地。

## Tech Stack
- React 18 + Vite
- sql.js (浏览器内 SQLite)
- 纯 CSS

## Features
- 添加待办（标题 + 截止日期）
- 列表展示（按截止日期排序）
- 标记完成/取消完成
- 删除待办
- 编辑标题和截止日期

## Component Tree
```
App
├── AddTodo        — 输入框 + 日期选择 + 添加按钮
├── TodoList       — 待办列表
│   └── TodoItem   — 单条待办（展示、完成切换、编辑、删除）
```

## Database Schema
```sql
CREATE TABLE todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  due_date TEXT,
  completed INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

## UI Behavior
- 列表按截止日期升序排列，无日期项排在最后，已完成项排在最后
- 已完成项标题显示删除线
- 内联编辑：点击编辑按钮切换为输入框，回车保存，Esc 取消
