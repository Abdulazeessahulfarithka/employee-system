import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../components/styles/TaskPage.css'; // Optional CSS for styling
import API from '../../global';

function TaskPage() {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API}/api/tasks`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Optional: Add token
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch tasks');
        }

        const data = await response.json();
        setTasks(data.tasks); // Assuming the API returns a `tasks` array
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tasks.length) {
    return <div>No tasks found.</div>;
  }

  return (
    <div className="task-page-container">
      <h1>All Tasks</h1>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task._id} className="task-card">
            <h3>{task.title}</h3>
            <p><strong>Status:</strong> {task.status}</p>
            <p><strong>Deadline:</strong> {task.deadline ? new Date(task.deadline).toLocaleDateString() : 'No deadline'}</p>
            <Link to={`/user-dashboard/task-details/${task._id}`} className="details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskPage;
