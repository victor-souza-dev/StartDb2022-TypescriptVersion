import { createContext } from "react";

type GlobalLoadingContextType = {
  loading: boolean;
  switchLoading: () => void;
};

export const GlobalLoadingContext = createContext<GlobalLoadingContextType>({
  loading: true,
  switchLoading: () => {},
});
