import { Link } from "react-router-dom";

import { GreetingStyled } from "../GreetingPage/greetingPage.styled";
import { FaBeer } from "react-icons/fa";


const ErrorPage = () => {
    return (
        <GreetingStyled>
            <h1>Sorry this beer do not exist!</h1>

            <Link to="/beerlist">
                <FaBeer />
                One more mug!
            </Link>
        </GreetingStyled>
    )
};


export default ErrorPage;