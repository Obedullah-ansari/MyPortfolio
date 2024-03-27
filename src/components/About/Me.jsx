import React from "react";
import styles from './About.module.css'
function Me() {
  return (
    <>
      <div className={styles.me}>
        <p>
          My name is Obedulla Ansari, and I hail from Jharkhand. <br />
          My hobbies include watching anime, reading novels, and painting.
        </p>

       <div>
       <span>Strengths :</span>
        <p>
          I am inherently friendly and can easily connect with others. <br />A
          quick learner, always ready to assist and known for my kind-hearted
          nature.
        </p>
       </div>
      
      <div>
      <span>Weakness :</span>
        <p>
          While I consider myself an introvert, I may find it a bit challenging
          to initiate conversations with unfamiliar people. <br />
          At times, I may experience moments of panic or overexcitement in
          certain situations.
        </p>
      </div>
      </div>
    </>
  );
}

export default Me;
