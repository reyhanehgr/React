import styled from "styled-components";

interface Props{
    text : string;
    onClick : ()=>void;
    color : "#FFEF01" | "#B8B592";
}

const MyButtonStyle = styled.button`
  background-color:${({ color }) => color}; ;
  color: white;
  padding: 20px;
`;

function StyledButton({onClick , text , color} : Props){
    return(
        <MyButtonStyle 
        onClick={onClick}
        color={color}>
            {text}
        </MyButtonStyle>
    );   
}
export default StyledButton;
