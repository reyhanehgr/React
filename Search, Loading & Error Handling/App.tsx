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
const [error,setError] = useState('');
const [search,setSearch] = useState('');
useEffect(()=>{
  setLoading(true);
  axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response)=>{setUsers(response.data),setLoading(false)})
  .catch(()=>{setError("Something went wrong!"),setLoading(false)})
},[])
const filterUsers = users.filter((user)=>user.email.toLowerCase().includes(search.toLowerCase()))
  return (
   <>
   <input value={search} onChange={(event)=>setSearch(event.target.value)}/>
   {loading && <p>Loading...</p>}
   {error && <p>{error}</p>}
   {filterUsers.map((user)=>(<p key={user.id}>{user.email} - {user.name}</p>))}
   </>
  );
}

export default App;
