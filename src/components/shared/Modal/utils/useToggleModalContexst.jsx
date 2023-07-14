import { useState } from "react";

export const useToggleModalContexst = (initialState = false) => {
    const [isOpenContext, setIsOpenContext] = useState(initialState);
    
    const open = () => setIsOpenContext(true);
    const close = () => setIsOpenContext(false);
    const toggleContext = () => setIsOpenContext(isOpenContext => !isOpenContext);
    
    return { isOpenContext, open, close, toggleContext };
};