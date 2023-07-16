import { useParams } from "react-router-dom";

import {ElemFirst, ElemSecond} from "./index";

const ElemMain = () => {
    const { intId } = useParams();

    const firsElem = intId === "1";
    const secondElem = intId === "2";

    return (
        <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
            {firsElem && <ElemFirst/>}
            {secondElem && <ElemSecond/>}
        </div>
    )
};


export default ElemMain;