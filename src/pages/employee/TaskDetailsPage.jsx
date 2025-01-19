import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/Authcontext.js"; // Update this import path as needed
import API from "../../global"; // Base API URL
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { taskId } = useParams(); // Fetch the taskId from the route params
  const [task, setTask] = useState(null); // State to store task details
  const [error, setError] = useState(null); // State to store any errors
  const [auth] = useAuth(); // Get the auth object from context (contains token and user)

  useEffect(() => {
    const fetchTask = async () => {
      try {
        console.log("Using token:", auth.token); // Debugging the token

        // Make the GET request to fetch task details
        const response = await axios.get(`${API}/api/tasks/${taskId}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`, // Ensure token is passed correctly
          },
        });

        console.log("Fetched Task Response:", response.data); // Debugging the response
        setTask(response.data.task); // Assuming the backend returns { task: { ... } }
      } catch (err) {
        console.error(
          "Error fetching task:",
          err.response?.data?.message || err.message
        );
        setError(err.response?.data?.message || "Failed to fetch task");
      }
    };

    // Fetch task only if a token is available
    if (auth.token) {
      fetchTask();
    } else {
      setError("Authentication token is missing");
    }
  }, [taskId, auth.token]);

  // Render error message if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Show loading indicator while the task is being fetched
  if (!task) {
    return <div>Loading...</div>;
  }

  // Render the task details once fetched
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>
        <strong>Task ID:</strong> {task.id}
      </p>
    </div>
  );
};

export default TaskDetails;
