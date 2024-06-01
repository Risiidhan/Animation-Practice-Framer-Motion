'use client'

import React, { useEffect } from 'react';
import style from './style.module.css';


const AnimationPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const divTop = document.querySelector<HTMLDivElement>(`.${style.divTop}`);

      if (!divTop) return;

      if (scrollPosition < 0.2 * window.innerHeight) {
        divTop.style.transform = `translateY(-${scrollPosition}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={style.animationContainer}>
      <div className={style.divTop}>
        div Top
      </div>
      <div className={style.divBottom}>
        div Bottom
      </div>
    </div>
  );
};

export default AnimationPage;
