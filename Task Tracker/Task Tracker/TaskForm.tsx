import React from 'react'
import {useForm} from "react-hook-form"

interface Task {
  title : string,
  duration : number,
  priority : string
};
interface Props{
    addData:(task:Task)=> void

};

function TaskForm({addData}:Props) {
const {register , handleSubmit ,formState: { errors }} = useForm<Task>();
function onSubmit(data : Task){
    addData(data);
}

  return (
    <>
    <h1>Task Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input {...register('title' ,{required:true})} id="title" type="text" className="form-control"/>
    {errors.title?.type === "required" && (<p className="text-danger">The Title Field is Required!</p>)}
  </div>
  <div className="form-group">
    <label htmlFor='duration' >Duration</label>
    <input {...register('duration',{valueAsNumber : true , required:true ,min:1})} id="duration" type="number" className="form-control" />
    {errors.duration?.type === "required" && (<p className="text-danger">The Duration Field is Required!</p>)}
    {errors.duration?.type === "min" && (<p className="text-danger">The Duration Field should be at list 1!</p>)}
  </div>
  <div className="form-group">
    <label htmlFor="priority">Priority</label>
    <select {...register('priority' ,{required:true})}id="priority" className="form-control">
      <option value="">Select a priority</option>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
    </select>
    {errors.priority?.type === "required" && (<p className="text-danger">Select an option!</p>)}
  </div>
  <button id='submit' type="submit" className="btn btn-primary">Add Task</button>
</form>
    </>
  )
}

export default TaskForm