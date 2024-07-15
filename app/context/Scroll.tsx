"use client";
import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";

type Scroll = {
  scrollContainer: HTMLElement | null;
};

type ContextType = [
  scrollContext: Scroll,
  setScrollContainer: Dispatch<SetStateAction<Scroll>>
];

export const ScrollContext = createContext<ContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: PropsWithChildren<{}>) => {
  const value = useState<Scroll>({
    scrollContainer: null,
  });
  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used inside the ScrollProvider");
  }
  return context;
};
