declare module "emoji-dictionary";
declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: {
        main: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: {
      primary?: {
        main?: string;
      };
    };
  }
}
