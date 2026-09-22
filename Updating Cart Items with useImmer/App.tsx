import { use, useState } from "react";
import { useImmer } from "use-immer";

function App() {

  /*Updating Status:*/
const [cart,setCart] = useImmer({
  discount : .1 ,
 items :[
  {id :1, title : "product1" , quantity : 1},
  {id :2, title : "product2" , quantity : 1}
 ]

});
const handleClick = () => {

    setCart((draft) => {

      draft.items.forEach((item) => {
        item.quantity = 2;
      });

    });

  };

return(
  <>
    {cart.items.map((item) => (
      <div key={item.id}>
        <p>ID: {item.id}</p>
        <p>Title: {item.title}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    ))}

    <button onClick={handleClick}>Click me</button>
  </>
);
}

export default App;
