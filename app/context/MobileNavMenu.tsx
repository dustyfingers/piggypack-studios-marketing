"use client";
import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";

type MobileNavMenu = {
  isOpen: boolean | null;
};

type ContextType = [
  mobileNavMenuContext: MobileNavMenu,
  setMobileNavMenuContainer: Dispatch<SetStateAction<MobileNavMenu>>
];

export const MobileNavMenuContext = createContext<ContextType | undefined>(
  undefined
);

export const MobileNavMenuProvider = ({ children }: PropsWithChildren<{}>) => {
  const value = useState<MobileNavMenu>({
    isOpen: null,
  });
  return (
    <MobileNavMenuContext.Provider value={value}>
      {children}
    </MobileNavMenuContext.Provider>
  );
};

export const useMobileNavMenuContext = () => {
  const context = useContext(MobileNavMenuContext);
  if (!context) {
    throw new Error(
      "useMobileNavMenuContext must be used inside the MobileNavMenuProvider"
    );
  }
  return context;
};
