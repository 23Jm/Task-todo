import React from "react";
import styles from "../styles/TaskItem.Module.css";
import { FaEdit } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { format } from "date-fns";

const TaskItem=({
  task,
  index,
  toggleComplete,
  editIndex,
  startEdit,
  editedText,
  setEditedText,
  handleSave,
  deleteTask,
})=> {
  return (
    <div className={styles.taskItem}>
      <li key={index} className="list">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(index)}
        />
        {editIndex === index ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSave(index, editedText);
              }
            }}
            className={task.completed ? "completed" : ""}
          />
        ) : (
          <span className={task.completed ? "completed" : ""}>
            {task.text} <br /> {format(task.time, "MM/dd/yyyy HH:mm:ss")}
          </span>
        )}
        <div className="buttons">
          <button
            onClick={() =>
              editIndex === index
                ? handleSave(index, editedText)
                : startEdit(index, task.text)
            }
          >
            {editIndex === index ? <MdSaveAlt /> : <FaEdit />}
          </button>
          <button onClick={() => deleteTask(index)}>
            <MdOutlineDelete />
          </button>
        </div>
      </li>
    </div>
  );
}

export default TaskItem;
