import React, { useContext, useState } from "react";
import { createContext } from "react";

import toursData from "../tours.json";

const Destinations = createContext();

const ToursContext = ({ children }) => {


  const [tours, setTours] = useState(toursData);

  const [searchParams, setSearchParams] = useState({
    location: "",
    distance: 0,
    maxPeople: 0,
  });




  const updateSearchParams = (newSearchParams) => {
   setSearchParams({ ...searchParams, ...newSearchParams });

  }; 


  return (
    <Destinations.Provider value={{ tours, setTours,searchParams, updateSearchParams }}>
      {children}
    </Destinations.Provider>
  );
};

export default ToursContext;

export const DestinationsState = () => useContext(Destinations);
