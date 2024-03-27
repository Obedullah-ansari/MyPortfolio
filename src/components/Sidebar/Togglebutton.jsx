import React from 'react'
import styles from './Sidebar.module.css';
import bar from "./list.png"
import cross from "./close.png"
function Togglebutton({onclick, open}) {
  return (
      <button className={styles.btn} onClick={onclick}>
       {open ?   <img  src={cross} alt="" /> :   <img   src={bar} alt="" />}
      </button>
  )
}

export default Togglebutton
