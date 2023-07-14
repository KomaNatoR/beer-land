import { BeerRecipeStyled } from "./beerListElems.styled";

const BeerRecipe = ({itemData}) => {
    const {method, ingredients, food_pairing, brewers_tips, contributed_by } = itemData;

    const malts = ingredients.malt.map(({name,amount})=>`${name}(${amount.value} ${amount.unit.replace("kilograms", "kg.")})`).join(", ");
    const hops = ingredients.hops.map(({name,amount, add, attribute})=>`${name}(${amount.value} ${amount.unit.replace("grams", "g.")} (${add}, ${attribute}))`).join(", ");
    const yeast = ingredients.yeast;

    const mashTemp = method.mash_temp.map(({ temp, duration }) => `${temp.value}${temp.unit.replace("celsius", "C")} - затримка ${duration ? duration : "no data"} хв`).join(", ");
    const fermentation = method.fermentation.temp.value;
    const features = method.twist && <><span style={{ fontWeight: "bold" }}>Особливості: </span><span>{method.twist}.</span></>;


    return (
        <BeerRecipeStyled>
            <h2>Receipe:</h2>
            <p>Виробник: <span>{contributed_by.slice(0, contributed_by.length - 12)}</span></p>
            <p>Інгредієнти:
                <ul style={{listStyle:"none",margin:"0",paddingLeft:"20px"}}>
                    <li><span style={{fontWeight:"bold"}}>Солод: </span><span>{malts}.</span> </li>
                    <li><span style={{fontWeight:"bold"}}>Хміль: </span><span>{hops}.</span></li>
                    <li><span style={{fontWeight:"bold"}}>Дріжджі: </span><span>{yeast}.</span></li>
                </ul>
            </p>
            <p>Процес варіння:
                <ul style={{listStyle:"none",margin:"0",paddingLeft:"20px"}}>
                    <li><span style={{ fontWeight: "bold" }}>Затирання: </span><span>{mashTemp}.</span></li>
                    <li><span style={{ fontWeight: "bold" }}>Бродіння: </span><span>{`${fermentation}C`}.</span></li>
                    <li>{features}</li>
                </ul>
            </p>
            <p>З чим самкує: <span>{food_pairing.join(", ")}. <strong>(Це брехня!!! Саме краще пиво смакує під тараньку, з ляща, по рецепту засолу мого брата! Ну на крайняк щука!)</strong></span></p>
            <p>Поради: <span>{brewers_tips}</span></p>
        </BeerRecipeStyled>
    )
};


export default BeerRecipe;
// method,