import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import FilterButtons from "./components/FilterButton";
import TaskList from "./components/TaskList";
import Header from "./components/Header";

const App=()=>{
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [editIndex, setEditIndex] = useState(-1);
  const [editedText, setEditedText] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks,
        { text: taskInput, completed: false},
      ]);
      setTaskInput("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText.trim();
    setTasks(updatedTasks);
    setEditIndex(-1);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filterTasks = (filterType) => {
    setFilter(filterType);
  };

  const startEdit = (index, text) => {
    setEditIndex(index);
    setEditedText(text);
  };

  const handleSave = (index, newText) => {
    if (newText.trim() !== "") {
      editTask(index, newText);
      setEditIndex(-1);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "incomplete") {
      return !task.completed;
    } else {
      return true;
    }
});

  return (
    <div className="App">
      <Header />
      <TaskInput
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        addTask={addTask}
      />
      {tasks.length > 0 && (
        <div>
          <FilterButtons filterTasks={filterTasks} />
          {filteredTasks.length > 0 ? (
            <TaskList
              tasks={filteredTasks}
              toggleComplete={toggleComplete}
              editIndex={editIndex}
              startEdit={startEdit}
              editedText={editedText}
              setEditedText={setEditedText}
              handleSave={handleSave}
              deleteTask={deleteTask}
            />
          ) : (
            <li className="list noTask">No tasks found</li>
          )}
        </div>
      )}
    </div>
  );
}
export default App;
