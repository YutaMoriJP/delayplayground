import React from "react";
import asyncDelay from "../util/asyncDelay";

//API Usage
//let <NetWorkDelay/> wrap the <button>, and pass the handleClick event handler
//to <NetWorkDelay/> so when button is clicked, event bubbles up
//handleClick should be state updater like () => setCount(1) etc.
//pass setStatus() to handle current status of asynchronous operation
//pending, resolved, and rejected are optional
//ms controls the delay time

//If the onClick is a network request, it should not have a try...catch block to handle network errors
//instead pass a dispatch function that sets the error object
//the handleClick in <NetworkDelay/> already handles errors

const NetWorkDelay = ({
  pending = "pending",
  resolved = "resolved",
  rejected = "rejected",
  setStatus = () => null,
  onClick = () => null,
  dispatch = () => null,
  ms = 0,
  timerID,
  children
}) => {
  const handleClick = async () => {
    if (+ms !== 0) setStatus(pending);
    try {
      //if onClick is a network request, do not handle errors
      //the try...catch here already handles it
      if (ms === 0) {
        onClick();
      } else {
        await asyncDelay(onClick, ms, timerID);
      }
      setStatus(resolved);
    } catch (error) {
      dispatch({ type: "rejected", payload: { error } });
      setStatus(rejected);
    }
  };
  React.useEffect(() => {
    const timerid = timerID.current;
    return () => {
      clearTimeout(timerid);
    };
  });
  return <article onClick={handleClick}>{children}</article>;
};
export default NetWorkDelay;
