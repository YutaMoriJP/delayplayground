import Button from "../Button/Button";
import Delay from "../Delay/Delay";
import React from "react";
import useLocalStorage, { getItem } from "../useHooks/useLocalStorage";
import styled from "styled-components";
import Text from "../styled/Text";

const Container = styled.article`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Count = ({ ms }) => {
  const storageName = "<Count/>";
  const [count, setCount] = React.useState(() => getItem(storageName) || 0);
  const [status, setStatus] = React.useState("idle");
  const timerID = React.useRef();
  const onClick = () => setCount((prevCount) => prevCount + 1);
  useLocalStorage(storageName, count);
  return (
    <>
      <h3>
        {<Text inline={1}>Count</Text>} Component - delayed by{" "}
        {<Text special={1}>{ms / 1000} seconds</Text>}
      </h3>
      <Container>
        <Delay
          onClick={onClick}
          setStatus={setStatus}
          ms={ms}
          timerID={timerID}
        >
          <Button disabled={status === "pending"}>Increment Count</Button>
        </Delay>
        <Button
          onClick={() => setCount(0)}
          color="secondary"
          disabled={count === 0 || status === "pending"}
        >
          Reset Count
        </Button>
      </Container>

      {status === "idle" && <p>Current Count {count}</p>}
      {status === "pending" && <p>Incrementing count...</p>}
      {(status === "idle" || status === "resolved") && <h3>Count: {count}</h3>}
      {status === "rejected" && <p>Incrementing has failed...</p>}
    </>
  );
};

export default Count;
