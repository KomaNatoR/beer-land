import { BeerRecipeStyled } from "./beerListElems.styled";

const BeerRecipe = ({itemData}) => {
    const { ingredients, food_pairing, brewers_tips, contributed_by } = itemData;
    const malts = ingredients.malt.map(({name,amount})=>`${name}(${amount.value} ${amount.unit.replace("kilograms", "kg.")})`).join(", ");
    const hops = ingredients.hops.map(({name,amount, add, attribute})=>`${name}(${amount.value} ${amount.unit.replace("grams", "g.")} (${add}, ${attribute}))`).join(", ");
    const yeast = ingredients.yeast;

    return (
        <BeerRecipeStyled>
            <h2>Receipe:</h2>
            <p>Contributed by: <span>{contributed_by.slice(0, contributed_by.length - 12)}</span></p>
            <p>Ingredients:
                <br /><span style={{fontWeight:"bold"}}>Солод: </span><span>{malts}.</span>
                <br /><span style={{fontWeight:"bold"}}>Хміль: </span><span>{hops}.</span>
                <br /><span style={{fontWeight:"bold"}}>Дріжджі: </span><span>{yeast}.</span>
            </p>
            <p>З чим самкує: <span>{food_pairing.join(", ")}. {"(Це брехня!!! Саме краще пиво смакує під тараньку, з ляща, по рецепту засолу мого брата! На крайняк щука!)"}</span></p>
            <p>Поради: <span>{brewers_tips}</span></p>
        </BeerRecipeStyled>
    )
};


export default BeerRecipe;
// method,