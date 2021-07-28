import { createTheme } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "#33cc00",
    },
    text: {
      secondary: secondaryColor,
    },
  },
});

export default theme;
