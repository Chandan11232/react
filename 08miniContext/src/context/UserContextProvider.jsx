import React, { useState } from "react";
import UserContext from "./UserContext";

//this component will take a children component as an argument and will return the user and setUser function
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
