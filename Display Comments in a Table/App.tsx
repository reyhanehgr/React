import axios from "axios";
import { useEffect, useState } from "react";


function App() {
 const[comments,setComments] =  useState([])
 useEffect(()=>{
  axios
  .get('https://jsonplaceholder.typicode.com/comments')
  .then((response)=>{setComments(response.data)})
 },[]);
  return (
    <>
    <table>
      <thead>
    <tr>
      <th>Email</th>
    </tr>
  </thead>
      <tbody>
        {comments.map((comment)=>(
          <tr key={comment.id}>
            <td>{comment.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default App;