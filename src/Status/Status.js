import React from "react";
import User from "../User/User";

const Pending = () => <h3>Pending...</h3>;

const Resolved = ({ data }) =>
  Array.isArray(data) ? (
    data.map((user) => <User {...user} />)
  ) : (
    <User {...data} />
  );

const Rejected = ({ error }) => (
  <p role="alert">{error?.message || "Something went wrong..."}</p>
);

const Status = ({ status, data, error }) => {
  return (
    <>
      {status === "pending" && <Pending />}
      {status === "resolved" && <Resolved data={data} />}
      {status === "rejected" && <Rejected error={error} />}
    </>
  );
};

export default Status;
