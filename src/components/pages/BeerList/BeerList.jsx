import { useEffect } from "react";
import { Link } from "react-router-dom";

import useStore from "store/store";

// import { getBeers } from "API/Api";
import { ListHeaderStyled, ListMainStyled } from "./beerList.styled";
import BeerItem from "./beerListElems/BeerItem";
import Loader from "components/shared/Loader/Loader";


const BeerList = () => {
    const data = useStore((state) => state.data);
    const fetchData = useStore((state) => state.fetchData);

    useEffect(() => {
        // getBeers().then(data => setBeerState(data));
        fetchData();
    }, [fetchData]);

    const list = data && data.map(it =>
        <li key={it.id}>
            <BeerItem itemData={it} />
        </li>
    );

    return (
        <>
            <ListHeaderStyled>
                <Link to="/">Greeting page</Link>
                <h2>I'm BeerList!</h2>
                <Link to="/interesting">Interesting page</Link>
            </ListHeaderStyled>
            
            <ListMainStyled>
                <ul>
                    {data ? list : <Loader />}
                </ul>
            </ListMainStyled>
        </>
    )
};


export default BeerList;