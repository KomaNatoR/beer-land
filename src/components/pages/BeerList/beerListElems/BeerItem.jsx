import { BeerItemStyled } from "./beerListElems.styled";

import Modal from "components/shared/Modal/Modal";
import { useToggleModal } from "components/shared/Modal/utils/useToggleModal";
import BeerRecipe from "./BeerRecipe";

const BeerItem = ({itemData, isSelected, onRightClick}) => {
    const { isOpen, toggle } = useToggleModal(false);
    const { name, tagline, first_brewed, description, image_url, abv, ibu, ebc, srm, ph } = itemData;
    
    const handleContextMenu = (event) => {
        event.preventDefault(); // Скасувати відображення контекстного меню браузера
        onRightClick(itemData); // Передати обраний елемент до батьківського компонента
    };

    return (
        <BeerItemStyled onClick={toggle} isSelected={isSelected} onContextMenu={handleContextMenu}>

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
            
            {isOpen &&
                <Modal toggleModal={toggle}>
                    <BeerRecipe itemData={itemData} />
                </Modal>
            }
        </BeerItemStyled>
    )
};


export default BeerItem;