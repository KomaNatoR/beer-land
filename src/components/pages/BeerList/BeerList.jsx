import { useState, useEffect } from "react";

import { getBeers } from "API/Api";
import { ListHeaderStyled, ListMainStyled } from "./beerList.styled";
import BeerItem from "./beerListElem/BeerItem";
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
                <h2>I'm BeerList!</h2>
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