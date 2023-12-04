// reqContext.js
import { createContext, useContext, useState } from 'react';

const ReqContext = createContext();

export const ReqProvider = ({ children }) => {
  const [req, setReq] = useState(null);

  return (
    <ReqContext.Provider value={{ req, setReq }}>
      {children}
    </ReqContext.Provider>
  );
};

export const useReq = () => {
  const context = useContext(ReqContext);
  if (!context) {
    throw new Error('useReq must be used within a ReqProvider');
  }
  return context;
};
