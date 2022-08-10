import React, { useState, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useStyles } from "./style.js";

const SideOne = ({ content,answer,step,handleData,edit }) => {
  const classes = useStyles();
  const ref = useRef();

  const goUp = (id) => {
    id.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const goDown = (id) => {
    id.scrollTo({
      top: id.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const stopScroll = (id) => {
    id.scrollTop = id.scrollTop;
  };

  return (
    <div>
      <div
        className={classes.scrollBtnTop}
        //onClick={handleUp}
        onPointerDown={(e) => goUp(ref.current)}
        onPointerUp={(e) => stopScroll(ref.current)}
      >
        <KeyboardArrowUpIcon style={{ cursor: "pointer" }} />
      </div>
      <textarea
        value={content}
        name={step===1?"answer":"rightAnswer"}
        ref={ref}
        onChange={handleData}
        rows="4"
        cols="50"
        maxLength="1000"
        className={classes.textarea}
        placeholder="YOUR NOTES"
        disabled={step===2 || !edit?true:false}

        // onChange={ev => setNote(ev.target.value)}
      />
      <div
        className={classes.scrollBtnBottom}
        //onClick={handleDown}
        onPointerDown={(e) => goDown(ref.current)}
        onPointerUp={(e) => stopScroll(ref.current)}
      >
        <KeyboardArrowDownIcon style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default SideOne;
