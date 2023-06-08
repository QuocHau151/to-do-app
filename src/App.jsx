import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDolist from "./todoapp";

function App() {
  const [toDolist, setToDolist] = useState(() => {
    let list = localStorage.getItem("to_do_app");
    if (list) {
      return JSON.parse(list);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("to_do_app", JSON.stringify(toDolist));
  }, [toDolist]);
  const onAdd = (value) => {
    const task = {
      id: Date.now(),
      name: value,
      isComplete: false,
    };
    setToDolist([...toDolist, task]);
  };
  const onComplete = (prop) => {
    let task = toDolist.find((e) => e.id === prop);
    console.log(task);
    if (task) {
      task.isComplete = true;
      setToDolist([...toDolist]);
    }
  };
  return <ToDolist toDolist={toDolist} onAdd={onAdd} onComplete={onComplete} />;
}

export default App;
