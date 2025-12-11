import { useEffect, useState } from "react";

const API = "http://localhost:3000";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch(API + "/tasks")
      .then((res) => res.json())
      .then((data) => {
        
        const sorted = [
          ...data.filter((t) => !t.completed),
          ...data.filter((t) => t.completed),
        ];
        setTasks(sorted);
      });
  }, []);

  
  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const res = await fetch(API + "/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    const newTask = await res.json();
    setTasks((prev) => [newTask, ...prev]);
    setTitle("");
  };

  
  const completeTask = async (id) => {
    const res = await fetch(`${API}/tasks/${id}/complete`, {
      method: "POST",
    });

    const updated = await res.json();

    
    setTasks((prev) => {
      const newList = prev.map((t) => (t.id === id ? updated : t));
      return [
        ...newList.filter((t) => !t.completed),
        ...newList.filter((t) => t.completed),
      ];
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Todo Manager
        </h1>

        {}
        <form onSubmit={addTask} className="flex gap-3 mb-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>

        {}
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`p-4 rounded-xl shadow-sm border flex items-center justify-between transition ${
                task.completed
                  ? "bg-green-100 text-gray-600 line-through opacity-70"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg">{task.title}</span>

              {!task.completed && (
                <button
                  onClick={() => completeTask(task.id)}
                  className="px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Complete
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
