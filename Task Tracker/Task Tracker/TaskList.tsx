import React from 'react'

interface Task {
    id : number
  title : string,
  duration : number,
  priority : string
};  
interface Props{
    takeData : Task[]
}
function TaskList({takeData}:Props) {
  return (
    <>
    <h1>Task List</h1>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Duration</th>
      <th scope="col">Priority</th>
    </tr>
  </thead>
  <tbody>
    {takeData.map((task) => 
    <tr key={task.title}>
      <td>{task.title}</td>
      <td>{task.duration}</td>
      <td>{task.priority}</td>
    </tr>
)}
  </tbody>
</table>
    
    
    
    </>
  )
}

export default TaskList