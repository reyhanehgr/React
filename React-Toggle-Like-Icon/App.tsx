import { useState } from "react";
import styled from "styled-components";

import LikeIcon from "./Components/Like";

function App() {
 

/* THIS IS FOR Like.tsx:*/
return(
  <>
  <LikeIcon onClick={() => console.log("Clicked!")} />
  </>
);

}

export default App;
