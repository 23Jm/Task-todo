import React from "react";
import TaskItem from "./TaskItem";
import styles from "../styles/TaskList.Module.css";

function TaskList({
  tasks,
  toggleComplete,
  editIndex,
  startEdit,
  editedText,
  setEditedText,
  handleSave,
  deleteTask,
}) {
  return (
    <div className={styles.TaskList}>
      <div  className="list">
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            toggleComplete={toggleComplete}
            editIndex={editIndex}
            startEdit={startEdit}
            editedText={editedText}
            handleSave={handleSave}
            deleteTask={deleteTask}
            setEditedText={setEditedText}
          />
        ))}
      </ul>
    </div>
    </div>
  );
}

export default TaskList;
