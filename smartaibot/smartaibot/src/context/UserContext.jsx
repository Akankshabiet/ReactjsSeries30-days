import React, { createContext, useState } from "react";

export const dataContext = createContext();

function UserContext({ children }) {
  const [startRes, setStartRes] = useState(false);
  const [popUp, setPopUP] = useState(false);
  const [input, setInput] = useState("");
  const [feature, setFeature] = useState("chat");

  const value = {
    startRes, setStartRes,
    popUp, setPopUP,
    input, setInput,
    feature, setFeature
  };

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;
