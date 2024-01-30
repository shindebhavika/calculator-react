import React from 'react'
import styles from './Display.module.css'
function Display({inputValue,value}) {
function inputValue(e){
console.log(e.target.value)
}
  return (
    <div className={styles.display}>
    <input type="text" name="" id="" placeholder="0" readOnly value={value} autoFocus onChange={inputValue} />
  </div>
  )
}

export default Display