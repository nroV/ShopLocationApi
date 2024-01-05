import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {

  function onToggleOn() {
    setGrid(true);
  }

  function onToggleOff(){
    setGrid(false);
  }
  const [isGrid, setGrid] = useState(true);
  return (
    <AppContext.Provider
      value={{
        isGrid: isGrid,
        onToggleOn,
        onToggleOff
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppToggle = () => {
  const context = useContext(AppContext);
  return context;
};
