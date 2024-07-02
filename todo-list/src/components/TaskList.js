import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/tasksSlice';
import style from './style.module.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleEdit = (id, text) => {
    const newText = prompt("Edit the task", text);
    if (newText !== null) {
      dispatch(editTask({ id, text: newText }));
    }
  };

  return (
    <ul className={style.taskContainer} >
      {tasks.map((task) => (
        <li className={style.taskList} key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <span>{task.text}</span>
          <button onClick={() => handleEdit(task.id, task.text)}>Edit</button>
          <button onClick={() => handleToggle(task.id)}>
            {task.completed ? 'Incomplete' : 'Complete'}
          </button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
