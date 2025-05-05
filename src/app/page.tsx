'use client';

import { useEffect, useState } from 'react';

type Task = {
  _id: string;
  title: string;
  description?: string;
  status: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('/api/tasks');
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async () => {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({ title, userId: 'dummyUserId' }),
    });
    if (res.ok) {
      setTitle('');
      fetchTasks();
    }
  };

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Enter task title"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task._id} className="border p-2 rounded">
            <strong>{task.title}</strong>
            <p className="text-sm text-gray-600">{task.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
