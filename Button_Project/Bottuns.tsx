interface Props{
    text : string;
    onClick : ()=>void;
    color : string;
}

function ButtonClick({text,onClick,color}: Props){
    return (
    <button type="button" 
    className={'btn btn-' + color} onClick={onClick} >
        {text}
    </button>);
}
export default ButtonClick;
