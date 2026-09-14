import { BsHeartFill } from "react-icons/bs";
import styled from "styled-components";

const LikeStyle = styled(BsHeartFill)<{ color: string }>`
color: ${({ color }) => color};
padding : 10px;
`;
interface Props{
    color : "red" | "black";
    onClick : ()=> void;
}
function LikeIcon({onClick,color}:Props){
    return(
        <LikeStyle
         onClick={onClick} color={color}>
        </LikeStyle>
    );
}
export default LikeIcon;