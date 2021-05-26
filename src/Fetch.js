import React from "react";
import Button from "./Button/Button";
import Delay from "./Delay/Delay";
import Status from "./Status/Status";
import Text from "./styled/Text";

const reducer = (state, action) => {
  switch (action.type) {
    case "resolved": {
      return { ...state, data: action.payload.data };
    }
    case "rejected": {
      return { ...state, error: action.payload.error };
    }
    default: {
      throw new Error("invalid case");
    }
  }
};

const lazyLoad = (initialState) => initialState;

const Load = ({ url, ms }) => {
  const [status, setStatus] = React.useState("idle");
  const [{ data, error }, dispatch] = React.useReducer(
    reducer,
    { data: null, error: null },
    lazyLoad
  );
  const controller = new AbortController();
  const signal = controller.signal;
  const timerID = React.useRef();

  const fetchData = async () => {
    const res = await fetch(url, { method: "GET", signal });
    if (!res.ok) {
      throw new Error(res.status);
    }
    const resJson = await res.json();
    dispatch({ type: "resolved", payload: { data: resJson } });
  };
  React.useEffect(() => {
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      <h3>
        {<Text inline={1}>Fetch</Text>} Component - delayed by{" "}
        {<Text special={1}>{ms / 1000} seconds</Text>}
      </h3>
      <Delay
        setStatus={setStatus}
        dispatch={dispatch}
        onClick={fetchData}
        ms={ms}
        timerID={timerID}
      >
        <Button disabled={status === "pending"}>Fetch</Button>
      </Delay>
      <Status data={data} status={status} error={error} />
    </>
  );
};

export default Load;
