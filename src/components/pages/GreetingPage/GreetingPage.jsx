import { Link } from "react-router-dom";

import { GreetingStyled } from "./greetingPage.styled";
import { FaBeer } from "react-icons/fa";


const GreetingPage = () => {
    return (
        <GreetingStyled>
            <h1>Do you wanna beer?</h1>

            <Link to="/beerlist">
                <FaBeer />
                Click here!
            </Link>
        </GreetingStyled>
    )
};


export default GreetingPage;