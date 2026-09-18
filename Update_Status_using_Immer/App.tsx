import { use, useState } from "react";
import { useImmer } from "use-immer";

function App() {

  /*Updating Status using Immer:*/
const [game,setGame] = useImmer({
  id : 1,
  player : {
    name : "John",
  }

});
const handleClick=()=>{
  setGame(draft => {draft.player.name = "Reyhaneh";})

};
return(
  <>
   <p>{game.player.name}</p>
  <button onClick={handleClick}>Click me</button>
  
  </>
);
}

export default App;
