import { createTheme } from '@mui/material/styles';
import type { CSSProperties } from 'react';

// Custom top-level `status` key on the theme, used to color project status chips.
// (Modern MUI module augmentation — the old `@mui/styles/defaultTheme`
// augmentation from the Gatsby version is no longer needed.)
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      dead: CSSProperties['color'];
      inprogress: CSSProperties['color'];
      idea: CSSProperties['color'];
      live: CSSProperties['color'];
    };
  }
  interface ThemeOptions {
    status?: {
      dead?: CSSProperties['color'];
      inprogress?: CSSProperties['color'];
      idea?: CSSProperties['color'];
      live?: CSSProperties['color'];
    };
  }
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#383636',
    },
    primary: {
      main: '#bac4ff',
    },
  },
  typography: {
    // Astro's local font provider exposes Raleway through this CSS variable
    // (the real @font-face family name is hashed), so reference the variable
    // rather than the literal "Raleway" name.
    fontFamily: 'var(--font-raleway), Roboto, sans-serif',
  },
  status: {
    dead: '#ff4a4a',
    inprogress: '#6573c3',
    idea: '#d56edf',
    live: '#579f57',
  },
});
