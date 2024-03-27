import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import { motion } from "framer-motion";
import { projectdata } from "../Data";
import Project from "./Project.jsx";


const containerVariants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

function Portfolio() {
  
  const [selectedproject, setselectedproject] = useState( );
  const [hidebtn, sethidebtn]= useState(false)
 
  function handelset(id){
    const selectedproject  = projectdata.find(item => item.id === id);
    setselectedproject(selectedproject)
  }
  function handelshowsidebar(){
    sethidebtn((prev) => !prev);  
  }
  
  function handelcssname(){
    let baseClass = styles.sidebar;
   if(hidebtn===true){
     
    return baseClass += ` ${styles.showsidebarhandel}`;
   }
   return baseClass
  }
  
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={handelcssname()}>
          <motion.div
            variants={containerVariants}
            initial="closed"
            animate="open"
            className={styles.projects}
          >  
            <div className={styles.btbox}  ><button className={styles.openbtn} onClick={handelshowsidebar} > X </button></div>
            <ul>
              {projectdata.map((items) => (
                <motion.li
                  variants={itemVariants}
                  className={styles.list}
                  key={items.id}
                  onClick={()=>handelset(items.id)}
                >
                  {items.title}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <div className={styles.rating}></div>
        </div>
        <div className={styles.bodypart}>
          <button className={styles.openbtn} onClick={handelshowsidebar} > X </button>
        {selectedproject ? (
          <Project 
          Id={selectedproject.id}
          vedio={selectedproject.vedio}
          image={selectedproject.image}
           title={selectedproject.title}
           text={selectedproject.text}
           visit={selectedproject.visit}
          />
        ) :  <p>No project is selected </p> }

        </div>
      </div>
    </section>
  );
}

export default Portfolio;
