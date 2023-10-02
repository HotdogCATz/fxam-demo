import React from 'react';
import styles from '/styles/StateBox.module.css';


const StateBox = ({ head, stateText, description1, subDescription1, description2, subDescription2, reverse, backgroundImage }) => {
  const containerStyle = {
    paddingTop: '54px',
  };

 

  return (
    <div className={styles.container} style={containerStyle}>
      {/* <div className={styles.image} style={imageStyle}></div> */}
      <div className={styles.textContainer}>
        <h2 className={styles.text}>{head}</h2>
        <p className={reverse ? styles.reverseStateText : styles.stateText} >{stateText}</p>
        <p className={reverse ? styles.reverseDescription : styles.description} >{description1}</p>
        <p className={reverse ? styles.reverseSubDescription : styles.subDescription} >{subDescription1}</p>
        <p className={reverse ? styles.reverseDescription2 : styles.description2} >{description2}</p>
        <p className={reverse ? styles.reverseSubDescription2 : styles.subDescription2} >{subDescription2}</p>
      </div>
      {/* <div className={styles.imageStyle}></div> */}
    </div>
  );
};

export default StateBox;