'use client'

import React from 'react'
import style from './style.module.css'
import { motion, useScroll, useTransform } from 'framer-motion';

const animationFMPage = () => {
    const { scrollY } = useScroll();
    const scrollPosition = window.innerHeight;
    //0.2 is calculated by measuring screen height and scrollY starting point in console
    const translateInNegative = -0.2 * scrollPosition;

    // Use useTransform to map scrollY value to translateY value for the first div
    const translateYTop = useTransform(scrollY, [0, 100], [0, translateInNegative]);

    // Use useTransform to map scrollY value to translateY value for the second div
    const translateYBottom = useTransform(scrollY, [scrollPosition-120,scrollPosition-20], [0, translateInNegative]);

    // Calculate the opacity of the second div based on scroll progress
    const opacity = useTransform(scrollY, [0, 200], [0.5, 1]);

    return (
        <>
            <motion.div className={style.animationContainer}>
                <div className={style.animationContainer}>
                    <motion.div className={style.divTop} style={{ translateY: translateYTop }}>
                        div Top
                    </motion.div>
                    <motion.div className={style.divBottom} style={{ translateY: translateYBottom }}>
                        div Bottom
                    </motion.div>
                    <motion.div className={style.divLast}>
                        div Last

                    </motion.div>
                </div>

            </motion.div>
        </>
    )
}

export default animationFMPage