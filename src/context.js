import React, { useContext, useState } from "react";
import { sublinks } from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLoacation] = useState({})
  const [page, setPage] = useState({page:'', links:[]})

  const openModal = () => {
    setisModalOpen(true);
  };
  const closeModal = () => {
    setisModalOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link)=> link.page === text)
    setPage(page)
    setLoacation(coordinates)
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
