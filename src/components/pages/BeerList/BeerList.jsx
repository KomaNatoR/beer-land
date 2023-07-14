import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getBeers } from "API/Api";
import { ListHeaderStyled, ListMainStyled } from "./beerList.styled";
import BeerItem from "./beerListElems/BeerItem";
import Loader from "components/shared/Loader/Loader";


const BeerList = () => {
    const [beerState, setBeerState] = useState();

    useEffect(() => {
        getBeers().then(data => setBeerState(data));
    }, []);

    const list = beerState && beerState.map(it=>
        <li key={it.id}>
            <BeerItem itemData={it} />
        </li>
    );

    return (
        <>
            <ListHeaderStyled>
                <Link to="/">First page</Link>
                <h2>I'm BeerList!</h2>
                <Link to="/">Interesting page</Link>
            </ListHeaderStyled>
            
            <ListMainStyled>
                <ul>
                    {beerState?list:<Loader/>}
                </ul>
            </ListMainStyled>
        </>
    )
};


export default BeerList;