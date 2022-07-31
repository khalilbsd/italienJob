import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {data} from "../../data/dummy.js";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import EditIcon from '@mui/icons-material/Edit';
import SideOne from "./SideOne.js";
import SideTwo from "./SideTwo.js";
import { useStyles } from "./style.js";
const Modal = () => {
  const classes=useStyles()
  const [step, setStep] = useState(1);

  const handleStep =()=>{
    if (step === 1){
      setStep(2)
    }else{
      setStep(1)

    }
  }

  return (
    <div className={classes.modal}>
      <Grid container>
        <Grid item xs={8}>
          <select id="title">
            {data &&
              data.map((item, index) => (
                <option value={item.value}>{item.name}</option>
              ))}
          </select>
        </Grid>
        <Grid item xs={4}>
          <button>
                <PriorityHighIcon/>
          </button>
        </Grid>
        <Grid item xs={8}>
          <input type="text" />
        </Grid>
        <Grid item xs={2}>
          <button>step</button>
        </Grid>
        <Grid item xs={2}>
           <button>
            <EditIcon/>
            </button>     
        </Grid>
       <Grid item xs={12}>
       <div className="modal-content">
            {
              step===1?
                <SideOne/>
                :
                <SideTwo/>
            }
        </div>
       </Grid>
        <Grid item xs={12}>
        <div className="modal-footer">
            <button onClick={handleStep}> Step 1 </button>
            <button onClick={handleStep}>Step 2</button>
            {
              step===2&&(
                <>
                <button>Wrong 10 min</button>
                <button>Difficult 44g</button>
                <button>Normal 7gg</button>
                <button>Easy 10gg</button>
                </>
              )
            }
        </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Modal;
