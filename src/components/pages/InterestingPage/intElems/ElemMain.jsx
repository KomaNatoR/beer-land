import { useParams } from "react-router-dom";

import ElemOne from "./ElemOne";
import ElemSecond from "./ElemSecond";

const ElemMain = () => {
    const { intId } = useParams();

    const firsElem = intId === "1";
    const secondElem = intId === "2";

    return (
        <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
            {firsElem && <ElemOne/>}
            {secondElem && <ElemSecond/>}
        </div>
    )
};


export default ElemMain;