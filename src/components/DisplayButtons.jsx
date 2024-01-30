import React from "react";
import styles from "./DisplayButtons.module.css";
function DisplayButtons({ buttonsNames,btnClick}) {
 let Specialbuttons=["=","+","*","-","/",".","AC","DEL","%","+-"]
  return (
    <div className={styles.buttonsContainer}>
      {buttonsNames.map((name) => {
        return <button   className={`${Specialbuttons.includes(name)&& styles.opr} `}
              onClick={()=>btnClick(name)} key={name}  id={`${name === "=" &&styles.eqBtn}`}>{name}</button>;
      })}
    </div>
  );
}

export default DisplayButtons;
