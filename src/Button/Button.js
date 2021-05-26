import React from "react";
import MaterialButton from "@material-ui/core/Button";
import styled from "styled-components";

const StyledButton = styled(MaterialButton)`
  && {
    margin: 1px;
  }
`;

const Button = ({
  children,
  color = "primary",
  variant = "contained",
  ...rest
}) => (
  <StyledButton type="button" variant={variant} color={color} {...rest}>
    {children}
  </StyledButton>
);

export default Button;
