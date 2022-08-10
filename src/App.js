import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/modal/Modal";
import {useStyles} from './Components/modal/style.js'

function App() {
  const classes=useStyles()
  const [show, setShow] = useState(false);
  const [maximize, setMaximize] = useState(false);
  const [edit, setEdit] = useState(false)
  const [save,setSave] = useState(false)
  const [data,setData]= useState({
    answer:'loreren ipsum initial value',
    rightAnswer:'loren ipsum right answer'
  });


  const handleData =(e)=>{
    setData({...data, [e.target.name]:e.target.value})
  }


  console.log(data)
  const handleMdoalShow = () => {
    setShow(true);
  };

  const handleModalHide = () => {
    setShow(false);
    setMaximize(false);
    setEdit(false)
    setSave(false)
  };

  const handleMinimize = () => {
    setMaximize(true);
    setShow(false);
  };

  const handleMaximize=()=>{
    setMaximize(false);
    setShow(true);
  }

  const handleSave=()=>{
    console.log("saving yeah")
    // handleModalHide()
    setEdit(false)
    setSave(true)

  }

  const handleEdit =()=>{
    setEdit(true)
    
  }
  return (
    <div className="App">
      <button  onClick={handleMdoalShow}>click me</button>
      {!show && maximize && <button className={classes.maximizeBtn} onClick={handleMaximize}>Maximize</button>}
      {show && (
        <Modal
          show={handleMdoalShow}
          hide={handleModalHide}
          minimize={handleMinimize}
          handleData={handleData}
          initilaData={data}
          editing={edit}
          saving={save}
          handleEdit={handleEdit}
          handleSave={handleSave}

        />
      )}
    </div>
  );
}

export default App;
