import type { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { theme } from "./theme";

// Wraps an Astro React island so every MUI component shares the same theme.
// `injectFirst` keeps Emotion's <style> tags ahead of any other CSS so they
// can be overridden, matching the old Gatsby Layout setup.
export const Providers = ({ children }: { children: ReactNode }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </StyledEngineProvider>
);
