//Setup data layer
//we need this to trcak the besket

import React, { createContext, useContext, useReducer } from "react";

//This is Data layer
export const StateContext = createContext();

//Build a Provider''
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we use the state inside in our component
export const useStateValue = () => useContext(StateContext);
