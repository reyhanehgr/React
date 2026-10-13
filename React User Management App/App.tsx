import axios from "axios";
import { useEffect, useState } from "react";

interface User{
id : number;
email : string
name : string
}
function App() {
const [users,setUsers] = useState<User[]>([]);
const [loading,setLoading] = useState(false);
const [error,setError] = useState("");
useEffect(()=>{
  setLoading(true);
  axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response)=>{setUsers(response.data);setLoading(false);})
  .catch(()=>{setError("Something wents wrong!");setLoading(false)})
},[]);
const handleDelete = (userId:number)=>{
  setUsers((pre)=>pre.filter((user)=>userId !== user.id))
}
  return (
   <>
  {loading && <p>Loadding....</p>}
  {error && <p>{error}</p>}
  {users.map((user)=>(
    <div key={user.id}>
      <p>{user.name} - {user.email}</p>
      <button onClick={()=>handleDelete(user.id)}>Delete</button>
    </div>
  ))}
   </>
  );
}

export default App;