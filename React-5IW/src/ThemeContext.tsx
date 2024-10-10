// src/ThemeContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  background: '#fff',
  color: '#000',
};

const darkTheme = {
  background: '#000',
  color: '#fff',
};

interface ThemeContextProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const ThemeContext = createContext<ThemeContextProps>({
  toggleTheme: () => {},
  isDarkMode: false,
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
