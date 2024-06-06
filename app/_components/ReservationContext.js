"use client";
import React, { createContext, useContext, useState } from "react";

const ReservationContext = createContext();
const intialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(intialState);

  function resetRange() {
    setRange(intialState);
  }

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside of the provider");

  return context;
}

export { ReservationProvider, useReservation };