"use client";

import { GlobalStyles } from "@/styles/global";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "styled-components";

export function StyledProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
