import { useState, useEffect } from "react";

import { ListHeaderStyled, ListMainStyled } from "./beerList.styled";
import { getBeers } from "API/Api";


const BeerList = () => {
    const [beerState, setBeerState] = useState();

    useEffect(() => {
        getBeers().then(data => setBeerState(data));
    }, []);

    // const listItem = beerState && beerState[0];

    return (
        <>
            <ListHeaderStyled>
                <h2>I'm BeerList!</h2>
            </ListHeaderStyled>
            
            <ListMainStyled>
                <div className="list_item">
                    <div>
                        <img src={beerState && beerState[1].image_url} alt="somebeer" />
                        <p>A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.</p>
                        <p>---------------------------------</p>
                        <p>Вперше зварено: <span>09/2007</span></p>
                        <p>Вміст спирту: <span>4.5</span></p>
                        <p>Гіркота: <span>60</span></p>
                        <p>ph: <span>4.4</span></p>
                        <p>Колір по EBC: <span>20</span></p>
                        <p>Колір по SRM:  <span>10</span></p>
                    </div>
                    <div>
                        <h3>{beerState && beerState[0].name}</h3>
                        <p>A Real Bitter Experience.</p>
                    </div>
                </div>
            </ListMainStyled>
        </>
    )
};


export default BeerList;