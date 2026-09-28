import { use, useState } from "react";
import TaskForm from "./Components/Task Tracker/TaskForm";
import TaskList from "./Components/Task Tracker/TaskList";

interface Task {
  title : string,
  duration : number,
  priority : string
};


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  function addTask(newTask:Task){
    setTasks([...tasks,newTask])
  }
  return (
    <>
    <TaskForm addData={addTask}/>
    <TaskList takeData={tasks}/>
    </>

  );
}

export default App;
