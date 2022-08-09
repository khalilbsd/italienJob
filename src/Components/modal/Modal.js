import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { data } from "../../data/dummy.js";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import EditIcon from "@mui/icons-material/Edit";
import SideOne from "./SideOne.js";
import { useStyles } from "./style.js";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Draggable from 'react-draggable';
const Modal = ({ show,hide,minimize }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [step, setStep] = useState(1);
  const [answer,  setAnswer] = useState(false);
  const handleStep = () => {
    if (step === 1) {
      setStep(2);
    } else {
      setStep(1);
    }
  };

  const handleAnswer =()=>{
    setAnswer(true)
    setStep(2)
  }

  return (
    <Draggable>

    
    <div className={matches?classes.modalWeb:classes.modalPhone}>
      <Grid container spacing={3} className={classes.modalContainer}>
        <Grid item xs={12}>
          <Grid container className={classes.modalBar}>
            <Grid item xs={1}>
              <IconButton
                onClick={minimize}
                className={classes.iconBtn + " " + classes.black}
                aria-label="warning"
                size="small"
              >
                <CloseFullscreenIcon />
              </IconButton>
            </Grid>
            <Grid item xs={1}>
              {/* <button>
                <PriorityHighIcon/>
          </button> */}
              <IconButton
                onClick={hide}
                className={classes.iconBtn + " " + classes.white}
                aria-label="warning"
                size="small"
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <select className={classes.input} id="title">
            {data &&
              data.map((item, index) => (
                <option style={{ color: "black" }} value={item.value}>
                  {item.name}
                </option>
              ))}
          </select>
        </Grid>

        <Grid item xs={2}>
          <IconButton
            className={classes.iconBtn + " " + classes.black}
            aria-label="warning"
            size="large"
          >
            <PriorityHighIcon />
          </IconButton>
        </Grid>
        <Grid item xs={8}>
          <input className={classes.input} type="text" />
        </Grid>
        <Grid item xs={2}>
          <button
            className={
              classes.step + " " + classes.borderWhite
            }
          >
            step
          </button>
        </Grid>
        <Grid item xs={2}>
          <IconButton
            className={classes.iconBtn + " " + classes.white}
            aria-label="warning"
            size="large"
          >
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <div className="modal-content">
            {step === 1 ? (
              <SideOne content="loren ipsum step 1" />
            ) : (
              <SideOne content="loren ipsum step 2" />
            )}
          </div>
        </Grid>
        <Grid item xs={12}>
          <Grid className={classes.modalFooter} container spacing={2}>
            <Grid item xs={6} lg={4} className={classes.stepNavigation}>
              <button
                className={
                  classes.steps + " " + (step === 1 ? classes.stepSelected : "")
                }
                onClick={handleStep}
              >
                {" "}
                Step 1{" "}
              </button>
              <button
                className={
                  classes.steps + " " + (step === 2 ? classes.stepSelected : "")
                }
                onClick={handleStep}
              >
                Step 2
              </button>
            </Grid>

            <Grid  item xs={6} lg={8} className={classes.answerBtnCont}>
              {step === 2 ? (
                <>
                  <button>Wrong 10 min</button>
                  <button>Difficult 44g</button>
                  <button>Normal 7gg</button>
                  <button>Easy 10gg</button>
                </>
              ) :
              answer || step ===1&&
              (
                <button onClick={handleAnswer} className={classes.answerBtn}>Answer</button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    </Draggable>
  );
};

export default Modal;
