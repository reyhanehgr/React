import { use, useState } from "react";
import { useImmer } from "use-immer";


function App() {
  /*Updating Status:*/
const [pizza,setPizza] = useImmer({
  name : "Spicy Pepperoni",
 topping : ['Mushroom']

});
const handleClick=()=>{
if (!pizza.topping.some((topping) => topping === 'Tomato')) {
  setPizza(draft => {
  draft.topping.push('Tomato');
});

}
};
return(
  <>
   <p>{pizza.topping  + " "}</p>
  <button onClick={handleClick}>Click me</button>
  
  </>
);
}

export default App;
