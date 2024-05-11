import { createContext, useState, useEffect } from "react";
export const SidebarContext = createContext();


const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleClose = () => {
    setIsSidebarOpen(false);
  };
  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
