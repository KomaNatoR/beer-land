import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useStore from "store/store";

// import { getBeers } from "API/Api";
import { ListHeaderStyled, ListMainStyled } from "./beerList.styled";
import BeerItem from "./beerListElems/BeerItem";
import Loader from "components/shared/Loader/Loader";


const BeerList = () => {
  const [page, setPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
    const data = useStore((state) => state.data);
    const fetchData = useStore((state) => state.fetchData);
    const deleteItems = useStore((state) => state.deleteItems);

    // console.log("page|-->", page);
    useEffect(() => {
        // getBeers().then(data => setBeerState(data));

        fetchData(page);
    }, [fetchData, page]);
    
    const onTrashClick = () => {
        const newData = data.filter((item) => !selectedItems.includes(item));
        console.log("newData|-->", newData);
        deleteItems(newData);

        if (newData.length < 15) {
            setPage(prev => prev + 1);
        }
    }
    const handleRightClick = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const list = data && data.slice(0,15).map(it =>
        <li key={it.id}>
            <BeerItem
                items={it}
                isSelected={selectedItems.includes(it)}
                onRightClick={handleRightClick}
                onClick={onTrashClick}
            />
        </li>
    );

    return (
        <>
            <ListHeaderStyled>
                <Link to="/">Greeting page</Link>
                <h2>What do you like?</h2>
                <Link to="/interesting">Interesting page</Link>
            </ListHeaderStyled>
            
            <ListMainStyled>
                <ul>
                    {data.length !== 0 ? list : <Loader />}
                </ul>
            </ListMainStyled>
        </>
    )
};


export default BeerList;