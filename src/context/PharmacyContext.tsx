import {createContext, ReactNode, useContext} from 'react';

const PharmacyContext = createContext({});

type PharmacyCartProps = {
  children: ReactNode;
};

export function usePharmacyContext() {
  return useContext(PharmacyContext);
}

export function PharmacyCart({children}: PharmacyCartProps) {
  return (
    <PharmacyContext.Provider value={{}}>{children}</PharmacyContext.Provider>
  );
}
