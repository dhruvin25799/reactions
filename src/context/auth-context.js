import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(false);
  return (
    <authContext.Provider value={{ authState, setAuthState }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
