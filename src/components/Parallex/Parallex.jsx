import React, { useRef } from "react";
import styels from "./Parallex.module.css";
import {motion , useScroll, useTransform} from "framer-motion";
import  scroll from "./scroll.png"

const variants ={
    scrollbutton: {
        opacity: 0,
        y: 10,
    
        transition: {
          duration: 1.5,
          repeat: Infinity,
        },
      },
}

function Parallex() {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target :ref,
        offset : ["start start" , "end start"]
    });
    
    const Ytext= useTransform(scrollYProgress ,[0,1] ,["0", "500%"])
    const Ybg= useTransform(scrollYProgress ,[0,1] ,["0", "100%"])
   


  return (
    <>
      <div ref={ref} className={styels.Parallex}>

        <motion.h1  style={{y :Ytext}} > lets work together </motion.h1>
        <motion.div className={styels.mountain}></motion.div>
      <motion.div style={{y :Ybg}} className={styels.planet}></motion.div>
      <motion.div   style={{x :Ybg}} className={styels.stars}></motion.div>

         <motion.img className={styels.movedown}
            animate="scrollbutton"
            variants={variants}
            src={scroll}
            alt=""
          />
       
      </div>

      
    </>
  );
}

export default Parallex;
