import { useState } from "react";

import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState("");

  const [tasks, setTasks] = useState([]);

  function addTask(e) {
    setTask(e.target.value);
  }
  function addDescription(e) {
    setDescription(e.target.value);
  }

  function addCompleted(e) {
    setCompleted(e.target.value);
  }

  function addbutton() {
    if (task && description && completed) {
      setTasks([...tasks, { task, description, completed }]);
    } else {
      alert("please fill all the fields");
    }
  }

  function updateButton(e) {
    setTask(e.target.value);
    setDescription(e.target.value);
    setCompleted(e.target.value);
    if (task == "") {
      return alert("please give a task name");
    } else {
      const indextoberemove = tasks.indexOf((ele) => ele == task);
      tasks.splice(indextoberemove,1)
      
      
      setTasks([...tasks, { task, description, completed }]);
    }
  }

  

  return (
    <>
      <span
        style={{
          padingTop: 40,
          background: "Red",
          fontSize: 20,
          borderRadius: 5,
        }}
      >
        Welcome To my first React TODO project
      </span>

      <div>
        <input
          style={{ marginTop: 40, borderRadius: 15, borderColor: "black" }}
          placeholder="Please enter your Task"
          onChange={addTask}
        ></input>
        <input
          onChange={addDescription}
          style={{ marginLeft: 30, borderRadius: 15, borderColor: "black" }}
          placeholder="Description"
        ></input>
        <input
          onChange={addCompleted}
          style={{ marginLeft: 30, borderRadius: 15, borderColor: "black" }}
          placeholder="Enter true or false"
        ></input>
      </div>
      <div>
        <button
          onClick={addbutton}
          style={{
            marginLeft: 10,
            marginTop: 20,
            cursor: "pointer",
            color: "Red",
          }}
        >
          Add New Task
        </button>
        <button
          onClick={updateButton}
          style={{
            marginLeft: 15,
            marginTop: 20,
            cursor: "pointer",
            color: "green",
          }}
        >
          Update tasks
        </button>
        <button
          style={{
            marginLeft: 15,
            marginTop: 20,
            cursor: "pointer",
            color: "dark-pink",
          }}
        >
          Delete Tasks
        </button>
        <button
          style={{
            marginLeft: 15,
            marginTop: 20,
            cursor: "pointer",
            color: "blue",
          }}
        >
          Mark tasks as Completed.
        </button>
        <br></br>
        {JSON.stringify(tasks)}
      </div>
    </>
  );
}

export default App;
