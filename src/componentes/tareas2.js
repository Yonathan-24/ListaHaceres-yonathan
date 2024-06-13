import React from 'react';

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
