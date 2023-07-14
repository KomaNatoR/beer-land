import { BeerItemStyled } from "./beerItem.styled";

const BeerItem = ({ itemData }) => {
    const { name, tagline, first_brewed, description, image_url, abv, ibu, ebc, srm, ph } = itemData;

    return (
        <BeerItemStyled>

            <div>
                <img src={image_url} alt="somebeer" />

                <p>{description}</p>
                <p>---------------------------------</p>
                <p>Вперше зварено: <span>{first_brewed}</span></p>
                <p>Вміст спирту: <span>{abv}</span></p>
                <p>Гіркота: <span>{ibu}</span></p>
                <p>Колір по EBC: <span>{ebc}</span></p>
                <p>Колір по SRM:  <span>{srm}</span></p>
                <p>ph: <span>{ph}</span></p>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{tagline}</p>
            </div>
        </BeerItemStyled>
    )
};


export default BeerItem;