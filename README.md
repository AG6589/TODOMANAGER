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

task-manager/
 ├── backend/
 │    ├── server.js
 │    ├── routes/tasks.js
 │    └── data/tasks.json
 ├── frontend/
 │    ├── src/
 │    │    ├── App.jsx
 │    │    ├── components/
 │    │    │    ├── TaskForm.jsx
 │    │    │    └── TaskList.jsx
 │    ├── package.json
 ├── README.md
 └── package.json

🧠 Approach (Clean & Simple Explanation)
🔹 Frontend Approach

TaskForm Component

Uses useState to store task title

Sends POST request to backend

TaskList Component

Fetches tasks using GET /tasks

Displays task list

Each task has a “Complete” button

On click → POST /tasks/{taskId}/complete

State Sync

After each create/complete action, re-fetch tasks

Ensures UI always reflects backend data

🔹 Backend Approach

Express server with /tasks routes

In-memory or JSON storage for tasks

Implement:

POST /tasks → create new task

GET /tasks → return all tasks

POST /tasks/{taskId}/complete → update task

Send JSON responses to frontend

🧪 Concepts Demonstrated

✔ CRUD operations
✔ React form handling
✔ State synchronization
✔ Express routing
✔ Modular folder structure
✔ Clean API integration
