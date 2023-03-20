import { createContext } from "react";

type SwitchThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export const SwitchThemeContext = createContext<SwitchThemeContextType>({
  isDarkTheme: false,
  toggleTheme: () => {},
});
