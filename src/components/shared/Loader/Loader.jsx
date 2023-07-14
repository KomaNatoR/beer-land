import { useState } from "react";

import { LoaderStyled } from "./loader.styled";
import { FaBeer } from "react-icons/fa";


const Loader = ({ isUndefind = true }) => {
    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [stepFour, setStepFour] = useState(false);

    setTimeout(() => {
        setStepOne(true);
    }, 300);
    setTimeout(() => {
        setStepTwo(true);
    }, 600);
    setTimeout(() => {
        setStepThree(true);
    }, 900);
    setTimeout(() => {
        setStepFour(true);
    }, 1200);
    // console.log("isUndefind|-->",isUndefind);

    return (
        <LoaderStyled>
            {/* {!Boolean(isUndefind) && <p>Sorry, something goin wrong with backend! It's need some time...</p>} */}

            {stepOne &&
                <FaBeer  className="loader_one loader"/>
            }
            {stepTwo &&
                <FaBeer  className="loader_two loader"/>
            }
            {stepThree &&
                <FaBeer  className="loader_three loader"/>
            }
            {stepFour &&
                <FaBeer  className="loader_four loader"/>
            }
        </LoaderStyled>
    )
};


export default Loader;