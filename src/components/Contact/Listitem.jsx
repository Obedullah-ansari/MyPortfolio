import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

function Listitem( {img, des}) {
 
       const isSmallScreen = useMediaQuery("(max-width: 768px)");
    
  return (
    <>
      <motion.li
        initial={{ x: isSmallScreen ? -200 : -500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: {  duration: 1  } }}
      >
        <img src={img} />
        <p className={styles.textpara}>
          {des}
        </p>
      </motion.li>
    </>
  );
}

export default Listitem;
