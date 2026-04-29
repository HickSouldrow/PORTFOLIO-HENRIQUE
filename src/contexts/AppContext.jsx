import { createContext, useState } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  return (
    <AppContext.Provider 
      value={{
        nomeUsuario: 'Guardsense Viewer',

      }}
    >
      {children}
    </AppContext.Provider>
  );
};
