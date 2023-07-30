import React, { useState, useEffect } from 'react';

import { ToTopButtStyled } from "./ScrollButtons.styled";
import { FaAngleDoubleUp } from "react-icons/fa";
import { BsFillChatRightFill } from "react-icons/bs";


const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible &&
        <ToTopButtStyled>
          <BsFillChatRightFill className='chat_svg'/>
          <p>Догори!</p>
          <FaAngleDoubleUp className='shevron_svg' onClick={scrollToTop} />
        </ToTopButtStyled>
      }
    </>
  )
};


export default ToTopButton;