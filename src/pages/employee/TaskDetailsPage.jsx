import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API from '../../global';

const TaskDetailsPage = () => {
  const { employeeId } = useParams(); // Extract the 'employeeId' parameter from the URL
  const [tasks, setTasks] = useState([]); // Assuming multiple tasks
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await axios.get(`${API}/api/tasks/${employeeId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('auth') || ''}`,
          },
        });
        console.log(response)
        setTasks(response.data); // Store task data in state
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch task details.');
      } finally {
        setLoading(false);
      }
    };

    if (employeeId) fetchTaskDetails(); // Fetch tasks only if employeeId exists
  }, [employeeId]);

  if (loading) return <p>Loading task details...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h1>Task Details</h1>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id} style={{ marginBottom: '1rem' }}>
            <h2>{task.title}</h2>
            <p>
              <strong>Description:</strong> {task.description}
            </p>
            <p>
              <strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Priority:</strong> {task.priority}
            </p>
            <p>
              <strong>Status:</strong> {task.status}
            </p>
          </div>
        ))
      ) : (
        <p>No tasks found for this employee.</p>
      )}
    </div>
  );
};

export default TaskDetailsPage;
