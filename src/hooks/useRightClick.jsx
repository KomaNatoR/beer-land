import { useState } from "react";

export const useRightClick = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    
    const handleRightClick = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };
    
    return { selectedItems, handleRightClick };
};
// useRightClick