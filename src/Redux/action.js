import { createTheme } from "@mui/material";

export const login = () => {
    return { type: "LOGIN" };
  };


  export const theme=createTheme({
    palette: {
        type: "dark",
      },
})