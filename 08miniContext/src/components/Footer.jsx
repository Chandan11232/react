import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Footer() {
  const { user } = useContext(UserContext);
  if (!user) return <h1>Not logged in.</h1>;
  return (
    <>
      <h1>username: {user.username}</h1>
      <h2>password: {user.password}</h2>
    </>
  );
}

export default Footer;
