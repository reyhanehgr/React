import React from 'react';
import { use, useState } from "react";
interface Props {
MyText : string,
}
function ExpandableText({MyText} : Props){
    const [isExpanded, setIsExpanded] = useState(false);
    const handleClick = () =>{
       setIsExpanded(!isExpanded);  
     }
  return (
    <>
    <p>
        {isExpanded ? MyText : MyText.slice(0, 50)}
    </p>
    <button onClick={handleClick}>{isExpanded ? "Less" : "More"}</button>
    </>
  );
}

export default ExpandableText