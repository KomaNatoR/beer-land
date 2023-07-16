import { useEffect } from "react";
import { Link } from "react-router-dom";

import useStore from "store/store";
import { useRightClick } from "hooks/useRightClick";
import { useHendleScroll } from "hooks/useHendleScroll";

import { ListHeaderStyled, ListMainStyled } from "./beerListPage.styled";
import BeerItem from "./beerListElems/BeerItem";
import Loader from "components/shared/Loader/Loader";


const BeerListPage = () => {
    const { selectedItems, handleRightClick } = useRightClick();
    const {listStart, listEnd} = useHendleScroll();

    const { data } = useStore((state) => state.data);
    const fetchData = useStore((state) => state.fetchData);
    const deleteItems = useStore((state) => state.deleteItems);

    useEffect(() => {
        if (data.length && data.length - listEnd <= 5) {fetchData()};
        if (data.length) return;
        console.log("EFFECT");

        fetchData();
    }, [data.length, fetchData, listEnd]);
    // console.log("page.NEW   |-->",page);
    // console.log("DATA       |-->", data);
    // console.log("DATA.length |-->", data.length);

    const onTrashClick = () => {
        const newData = data.filter((item) => !selectedItems.includes(item));
        deleteItems(newData);

        if (newData.length <= 15) {
            fetchData();
        };
    };

    // console.log("listStart|-->",listStart);
    // console.log("listEnd  |-->",listEnd);
    const list = data.slice(listStart, listEnd).map(it =>
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


export default BeerListPage;