import React, { useState, useEffect } from 'react';
import '../../components/styles/global.css'; // Optional custom styles
import axios from '../../config/axiosConfig.js';

const TaskManagementPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/tasks/');
      setTasks(response);
      console.log(response)
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError('Failed to fetch tasks. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async () => {
    if (!newTask.trim()) {
      setError('Task description cannot be empty.');
      return;
    }
    try {
      const response = await axios.post('/api/tasks/', { description: newTask });
      setTasks([...tasks, response.data]);
      setNewTask('');
      setError('');
    } catch (error) {
      console.error('Error adding task:', error);
      setError('Failed to add task. Please try again.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
      setError('Failed to delete task. Please try again.');
    }
  };

  return (
    <div className="task-management">
      <h1>Task Management</h1>
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <div>
          <div className="task-input">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
          </div>
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task._id}>
                {task.description}
                <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskManagementPage;
