import React from "react";
import styled from "styled-components";

const Container = styled.article`
  display: flex;
  gap: 5px;
  justify-content: center;
  margin: 2px;
  padding: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  label {
    align-self: center;
  }
  select {
    border: 2px solid seagreen;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 30px;
  }
`;

const Select = ({ options, handleChange, value, label }) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        onChange={handleChange}
        value={value}
        style={{ display: "block" }}
      >
        {options.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </Container>
  );
};
export default Select;
