import ButtonClick from "./Bottuns";

function App() {
  return (
    <div>
      <ButtonClick text="Button" color="warning"
      onClick={()=>console.log('Clicked!')}/>
    </div> 
  );
}

export default App;
