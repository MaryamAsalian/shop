import React, { useState } from "react";
import styles from "./Banner.module.css";

import bannerone from "./images/bannerone.jpg";
import bannertwo from "./images/bannertwo.jpg";


import right from './svgs/right.svg';
import left from './svgs/left.svg';

const Banner = () => {
 const[imageData , setImageData] = useState(bannerone);


   const rightHandeler =() =>{
    setImageData(bannertwo)
    
  }
  const leftHandeler =() =>{
    setImageData(bannerone)
    
  }
  return (
    <div className={styles.container}>
     
      <img className={styles.pic}  src={imageData} alt="banner" />
      <img className={styles.picb} src={right} alt="right" onClick={rightHandeler}/>
      <img className={styles.pica} src={left} alt="left" onClick={leftHandeler}/>
    </div>

  );
};

export default Banner;
