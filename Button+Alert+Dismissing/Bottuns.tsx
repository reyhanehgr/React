
interface Props{
    onClick : ()=>void;  
}

function ButtonClick({onClick}: Props){
    return (
    <div className="d-grid gap-2">
      <button className="btn btn-primary" type="button" onClick={onClick}>Button</button>
    </div>
    );
}
export default ButtonClick;
