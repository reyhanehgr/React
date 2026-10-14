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
useEffect(()=>{
setLoading(true);
axios
.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{setUsers(response.data);setLoading(false)})
.catch(()=>{setError("Could not load users");setLoading(false)})
},[])
const handleAdd = ()=>{
  if(!newName.trim() || !newEmail.trim()){
    return;
  }
  const newUser:User = {
    id : Date.now(), name : newName.trim(), email : newEmail.trim()
  };
  setUsers((pre)=>[...pre,newUser]);
  setNewName("");
  setNewEmail("");
};
  return (
   <>
   <input placeholder="Name" value={newName} onChange={(event)=>setNewName(event.target.value)}/>
   <input placeholder="Email" value={newEmail} onChange={(event)=>setNewEmail(event.target.value)}/>
   <button onClick={handleAdd}>Add User</button>
   {loading && <p>Loading...</p>}
   {error && <p>{error}</p>}
   {users.map((user)=>
    <div key={user.id}>
      <p>{user.name} - {user.email}</p>
    </div>
   )}
 
   </>
  );
}

export default App;