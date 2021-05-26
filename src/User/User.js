import React from "react";
import Paper from "@material-ui/core/Paper";

const User = ({ name, username, email, website, phone }) => {
  return (
    <Paper
      elevation={20}
      style={{ padding: 10, background: "#212529", color: "white" }}
    >
      <h1>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
      <p>{website}</p>
      <p>{phone}</p>
    </Paper>
  );
};

export default User;
