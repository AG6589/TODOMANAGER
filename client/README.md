# Todo / Task Manager — Full Stack (React + Express)

A clean, minimal Task/Todo Manager built for a fresher take-home.  
**Frontend:** React (Vite) + Tailwind  
**Backend:** Node.js (Express)  
**Storage:** In-memory (simple to swap for SQLite)

> Assignment scope: implement 3 APIs (`POST /tasks`, `GET /tasks`, `POST /tasks/{taskId}/complete`) and a UI to list/add/complete tasks. CRUD + state sync. :contentReference[oaicite:0]{index=0}

---

## ✨ Features
- Add task
- List tasks
- Mark task completed (completed tasks move to bottom)
- Clean Tailwind UI

---

## 📂 Project Structure

TodoManager/
├─ server/
│  ├─ src/ (index.js, routes.js, store.js)
│  └─ package.json   // includes: "type":"module", dev/start scripts
├─ client/
│  ├─ src/ (App.jsx, main.jsx, input.css, output.css, etc.)
│  └─ package.json
├─ docs/
│  ├─ ui-home.png
│  ├─ ui-add.png
│  └─ ui-complete.png
├─ README.md
└─ .gitignore
