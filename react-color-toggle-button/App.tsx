import { useState } from "react";
import StyledButton from "./Button";
import styled from "styled-components";


function App() {
  const [color, setColor] = useState("#B8B592");

  return (
  <>
  <StyledButton 
  color={color}
  text="My Button"
  onClick={()=>setColor(color === "#B8B592" ? "#FFEF01" : "#B8B592")}
  >

  </StyledButton>
  
  </>);
}

export default App;
