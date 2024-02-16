import React, { createContext, useState } from 'react';

export const contextNavigationPage = createContext();

export const NavigationPageContext = ({ children }) => {
  const [currentComponent, setCurrentComponent] = useState('ListProducts');
  return (
    <contextNavigationPage.Provider
      value={{
        currentComponent,
        setCurrentComponent
      }}
    >
      {children}
    </contextNavigationPage.Provider>
  )
}