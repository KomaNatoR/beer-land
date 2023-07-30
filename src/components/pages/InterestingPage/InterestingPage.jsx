import { Link, NavLink, Outlet } from "react-router-dom";

import { InterestingStyled } from "./interesting.styled";
import { FaBeer } from "react-icons/fa";


const InterestingPage = () => {
    return (
        <InterestingStyled>
            <h2>Interesting facts!</h2>
            <div>
                <div style={{ position: "relative", width:"54px" }}>
                    <NavLink to="/interesting/1" className="int_pages">1</NavLink>
                </div>
                <div style={{position:"relative", width:"54px"}}>
                    <NavLink to="/interesting/2" className="int_pages">2</NavLink>
                </div>
                <div style={{position:"relative", width:"54px"}}>
                    <NavLink to="/interesting/3" className="int_pages">3</NavLink>
                </div>
            </div>

            <Outlet />
            
            <div>
                <a className="down_links" href="https://www.youtube.com/@beercult">YouTube: Культ пива!</a>
                <Link className="down_links" to="/beerlist" style={{marginBottom:"15px"}}>
                    <FaBeer />
                    One more mug!
                </Link>
            </div>
        </InterestingStyled>
    )
};


export default InterestingPage;