import { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import DisplayButtons from "./components/DisplayButtons";

function App() {
  const buttonsNames = [
    "DEL",
    "AC",
    "/",
    ".",
    "%",
    "1",

    "2",

    "3",
    "+",
    "4",

    "5",
    "6",

    "-",
    "7",
    "8",
    "9",
    "*",
    "+-",

    "=",
    "0",
  ];

  let [calVal, setCalVal] = useState("");
  let fullValue = "";
  function btnClick(name) {
    if (name === "AC") {
      setCalVal("");
    } else if (name === "=") {
      setCalVal(eval(calVal));
    } else if (name === "DEL") {
      setCalVal(calVal.slice(0, -1));
    } else if (name === "%") {
      setCalVal(eval(calVal) / 100);
    } else if (name === "+-") {
      setCalVal(String(-eval(calVal)));
    } else {
      // calVal=""
      setCalVal(calVal + name);
    }

    // console.log(calVal);
  }

  function inputValue(e) {
    console.log(calVal);
  }
  return (
    <>
      <center>

        <div className={styles.container}>
          <Display inputValue={inputValue} value={calVal} />
          <DisplayButtons buttonsNames={buttonsNames} btnClick={btnClick} />
        </div>
      </center>
    </>
  );
}

export default App;
