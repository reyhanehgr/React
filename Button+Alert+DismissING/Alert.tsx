import { ReactNode } from "react";
interface Props{
    children : ReactNode;
}
function AlertDisMiss({children}:Props){
    return(
        <div>{children}</div>
    );
}
export default AlertDisMiss;