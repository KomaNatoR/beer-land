import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {ElemFirst, ElemSecond, ElemThird} from "./index";


const ElemMain = () => {
    const { intId } = useParams();
    const navigate = useNavigate();

    const firsElem = intId === "1";
    const secondElem = intId === "2";
    const thirdElem = intId === "3";

    useEffect(() => {
        if (!firsElem && !secondElem && !thirdElem) navigate("/interesting/1");
    }, [firsElem, navigate, secondElem, thirdElem]);


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {firsElem && <ElemFirst />}
            {secondElem && <ElemSecond />}
            {thirdElem && <ElemThird />}
        </div>
    );
};


export default ElemMain;