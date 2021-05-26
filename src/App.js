import "./styles.css";
import Count from "./Count/Count";
import Select from "./Select/Select";
import React from "react";
import Fetch from "./Fetch";
import { timeOption, componentOption } from "./data/options";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Wrapper from "@material-ui/core/Container";

const Container = styled.article`
  background: #d0ebff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  & > * {
    flex: 0 1 150px;
  }
`;

export default function App() {
  const [time, setTime] = React.useState(1000);
  const [component, setComponent] = React.useState("count");
  const handleTimeChange = (event) => setTime(event.target.value);
  const handleComponentChange = (event) => setComponent(event.target.value);

  return (
    <div className="App">
      <Wrapper maxWidth="md">
        <Paper elevation={20}>
          <Container>
            <Select
              label="Delay by"
              value={time}
              options={timeOption}
              handleChange={handleTimeChange}
            />
            <Select
              label="Chooose Component"
              value={component}
              options={componentOption}
              handleChange={handleComponentChange}
            />
          </Container>
        </Paper>
        {component === "count" && (
          <Paper elevation={20} style={{ padding: 10, margin: "10px 0px" }}>
            <Count ms={time} />
          </Paper>
        )}
        {component === "fetch" && (
          <Paper elevation={20} style={{ padding: 10, margin: "10px 0px" }}>
            <Fetch
              ms={time}
              url="https://jsonplaceholder.typicode.com/users/1"
            />
          </Paper>
        )}
      </Wrapper>
    </div>
  );
}
