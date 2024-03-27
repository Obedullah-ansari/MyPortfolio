import React from "react";
import styles from "./Portfolio.module.css";
import { useEffect } from "react";
import { useRef } from "react";
import {motion} from "framer-motion"

function Project({ Id,vedio, image, title, text, visit }) {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current && title) {
      videoRef.current.load(); // Reload the video
    }
  }, [title, vedio]);
  
  function handelcss() {
    let baseClassName = styles.projectconatiner;

    if (Id === 111) {
      baseClassName += ` ${styles.tictac}`;
    } else if (Id === 112) {
      baseClassName += ` ${styles.timer}`;
    }
    else if (Id === 113) {
      baseClassName += ` ${styles.mydiary}`;
    }
    else if (Id === 114) {
      baseClassName += ` ${styles.pikker}`;
    }

    return baseClassName;
  }
  
  return (
    <>
      <motion.div className={handelcss()}
      initial={{scale :0, opacity :0}}
      animate={{scale:1, opacity :1}}
      transition={{duration :0.5}}
      >
        <div className={styles.vedioconatiner}>
          <img className={styles.proimg} src={image} alt="" />
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className={styles.projectvedio}
          >
            <source src={vedio} type="video/mp4" />
          </video>
        </div>

        <h1>Title: {title}</h1>
        <h2>Description :</h2>
        <p>
        {text}
        </p>
        <a href={visit} className={styles.visitbtn}>
          visit
        </a>
      </motion.div>
    </>
  );
}

export default Project;
