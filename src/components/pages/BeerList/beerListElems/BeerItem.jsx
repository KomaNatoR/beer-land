import { BeerItemStyled } from "./beerListElems.styled";
import { FaTrash } from "react-icons/fa";

import Modal from "components/shared/Modal/Modal";
import { useToggleModal } from "components/shared/Modal/utils/useToggleModal";
import BeerRecipe from "./BeerRecipe";

const BeerItem = (props) => {
    const { isOpen, toggle } = useToggleModal(false);
    const { items, isSelected, onRightClick, onClick } = props;
    const { name, tagline, first_brewed, description, image_url, abv, ibu, ebc, srm, ph } = items;
    
    const handleContextMenu = (e) => {
        e.preventDefault();
        onRightClick(items); // Передати обраний елемент до батьківського компонента
    };
    const isOpenModal = (e) => {
        if (e.target.type === "button" || e.target.type === "svg" || e.target.tagName === "path") return;
        toggle();
    }

    return (
        <BeerItemStyled onClick={isOpenModal} isSelected={isSelected} onContextMenu={handleContextMenu}>

            <div>
                {isSelected &&
                    <button onClick={onClick} className="btn_remove" type="button" ><FaTrash /></button>
                }
                
                <img src={image_url} alt="somebeer" />

                <p>{description}</p>
                <p>---------------------------------</p>
                <p>Вперше зварено: <span>{first_brewed}</span></p>
                <p>Вміст спирту: <span>{abv}</span></p>
                <p>Гіркота: <span>{ibu}</span></p>
                <p>Колір по EBC: <span>{ebc ? ebc : "no data"}</span></p>
                <p>Колір по SRM:  <span>{srm ? srm : "no data"}</span></p>
                <p>ph: <span>{ph}</span></p>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{tagline}</p>
            </div>
            
            {isOpen &&
                <Modal toggleModal={toggle}>
                    <BeerRecipe itemData={items} />
                </Modal>
            }
        </BeerItemStyled>
    )
};


export default BeerItem;