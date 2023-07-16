import { Link, NavLink, Outlet } from "react-router-dom";

import { GreetingStyled } from "../GreetingPage/greetingPage.styled";
import { FaBeer } from "react-icons/fa";


const InterestingPage = () => {
    return (
        <GreetingStyled style={{width:"480px"}}>
            <h1>Interesting facts!</h1>
            <div style={{position:"absolute", top:"38px",display:"flex"}}>
                <NavLink to="/interesting/1" className={"int_pages"}>1</NavLink>
                <NavLink to="/interesting/2" className={"int_pages"}>2</NavLink>
            </div>

            <Outlet />
            
            <a href="https://www.youtube.com/@beercult">YouTube: Культ пива!</a>
            <Link to="/beerlist" style={{marginBottom:"15px"}}>
                <FaBeer />
                One more mug!
            </Link>
        </GreetingStyled>
    )
};


export default InterestingPage;