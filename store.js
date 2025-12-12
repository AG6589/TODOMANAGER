let tasks = [];
let id = 1;

export function listTasks() {
  return tasks;
}

export function addTask({ title }) {
  const task = { id: id++, title, completed: false };
  tasks.push(task);
  return task;
}

export function completeTask(taskId) {
  const task = tasks.find(t => t.id == taskId);
  if (!task) return null;
  task.completed = true;
  return task;
}
