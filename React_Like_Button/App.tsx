import { useState } from "react";
import styled from "styled-components";
import LikeIcon from "./Components/Like";

function App() {
/* THIS IS FOR Like.tsx:*/
const [color, setColor] = useState("black");
return(
  <>
  <LikeIcon
  color={color}
  onClick={() => {
  setColor(color === "red" ? "black" : "red");
  console.log("Clicked!");
}}
  ></LikeIcon>
  </>
);

}
export default App;
