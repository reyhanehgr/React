import { BsHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import styled from "styled-components";
import { useState } from "react";


const LikeStyle = styled(BsHeartFill)`
color : red;
padding : 10px;
`;
const UnLikeStyle = styled(BsHeart)`
padding : 10px;
`;


interface Props{
    onClick : ()=> void;
}
function LikeIcon({onClick}:Props){
    const [liked, setLiked] = useState(false);
    return(
        <div
      onClick={() => {
        setLiked(!liked);
        onClick();
      }}
    >
      {liked ? <LikeStyle /> : <UnLikeStyle />}
    </div>
    );
}
export default LikeIcon;