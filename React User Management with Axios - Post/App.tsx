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
const [newName,setNewName] = useState("");
const [newEmail,setNewEmail] = useState("");
const [isAdding,setIsAdding] = useState(false);
useEffect(()=>{
  axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response)=>{setUsers(response.data);setLoading(false)})
  .catch(()=>{setError("Could not load users");setLoading(false)})
},[]);
const handleAdd = ()=>{
  if(!newName.trim() || !newEmail.trim()){return;};
  setIsAdding(true);
  setError("");
  axios
  .post("https://jsonplaceholder.typicode.com/users",
    {name : newName.trim(), email : newEmail.trim()})
  .then((response)=>{setUsers((pre)=>[...pre,response.data]);setNewName("");setNewEmail("");
    setIsAdding(false);
  })
  .catch(()=>{setError("Could not add user!");setIsAdding(false);})
}

  return (
   <>
   <input value={newName} onChange={(e)=>setNewName(e.target.value)} placeholder="Name"/>
   <input value={newEmail} onChange={(e)=>setNewEmail(e.target.value)} placeholder="Email"/>
   <button onClick={handleAdd} disabled={isAdding}>{isAdding ? "Adding..." : "Add User"}</button>
   {loading && <p>Loading...</p>}
   {error && <p>{error}</p>}
   {users.map((user)=>(
    <div key={user.id}>
      <p>{user.name} - {user.email}</p>
    </div>
   ))}
   
   </>
  );
}

export default App;