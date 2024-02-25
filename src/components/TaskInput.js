import React from "react";
import styles from "../styles/TaskInput.Module.css";
import { IoIosAdd } from "react-icons/io";

const TaskInput=({ taskInput, setTaskInput, addTask })=> {
  return (
    <div className={styles.Input}>
      <div className="taskInput">
        <input
          className="input"
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add task..."
        />
        <button className="button" onClick={addTask}>
          <IoIosAdd />
        </button>
      </div>
    </div>
  );
}

export default TaskInput;
