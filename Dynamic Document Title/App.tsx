import { useEffect, useState } from "react"

function App() {
const [name,setName] = useState('');
useEffect(() => {
  document.title = name;
}, [name]);

  return (
    <>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
    <p>Hello {name}</p>
    </>
  )
}

export default App
