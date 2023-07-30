import { useState, useEffect, useCallback } from "react";

import useStore from "store/store";


export const useHendleScroll = () => {
    const listStart = 0;
    // const [listStart, setListStart] = useState(0);
    const [listEnd, setListEnd] = useState(15);
    
    const { data } = useStore((state) => state.data);
    // const fetchData = useStore((state) => state.fetchData);
    
    const handleScroll = useCallback(async() => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        // if (scrollTop < 110) {
        //     // console.log("FIRST_IF"); && listStart >= 5
        //     setListStart(prev => prev - 5);
        //     setListEnd(prev => prev - 5);
        // };
        // console.log("scrollTop   |-->",scrollTop);
        // console.log("clientHeight|-->",clientHeight);
        // console.log("SUM         |-->",scrollTop+clientHeight);
        // console.log("scrollHeight|-->",scrollHeight);
        // console.log("data.length |-->",data.length);
        // console.log("listStart   |-->",listStart);
        // console.log("listEnd     |-->",listEnd);

        if (data.length === listEnd) return;
        if (scrollTop + clientHeight >= scrollHeight - 10) {
            // setListStart(prev => prev + 5);
            setListEnd(prev => prev + 5);
        };
    }, [data.length, listEnd]);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return { listStart, listEnd };
};