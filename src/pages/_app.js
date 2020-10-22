import "styles/globals.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import myTheme from "theme";

const theme = createMuiTheme(myTheme);

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />{" "}
    </ThemeProvider>
  );
};

export default MyApp;
