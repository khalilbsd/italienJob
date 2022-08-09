import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/modal/Modal";
import {useStyles} from './Components/modal/style.js'

function App() {
  const classes=useStyles()
  const [show, setShow] = useState(false);
  const [state, setState] = useState(false);
  const [maximize, setMaximize] = useState(false);
  const handleMdoalShow = () => {
    setShow(true);
  };

  const handleModalHide = () => {
    setShow(false);
    setMaximize(false);
  };

  const handleMinimize = () => {
    setMaximize(true);
    setShow(false);
  };

  const handleMaximize=()=>{
    setMaximize(false);
    setShow(true);
  }
  return (
    <div className="App">
      <button  onClick={handleMdoalShow}>click me</button>
      {!show && maximize && <button className={classes.maximizeBtn} onClick={handleMaximize}>Maximize</button>}
      {show && (
        <Modal
          hhow={handleMdoalShow}
          hide={handleModalHide}
          minimize={handleMinimize}
        />
      )}
    </div>
  );
}

export default App;
