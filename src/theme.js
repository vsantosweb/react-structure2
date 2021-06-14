import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

const theme = {
  
    defaultContainer: {
        width: '1280px',
        spacing: '.8em'
    },
}

const Theme = ({ children }) => (

    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        {children}
        </ThemeProvider>
);

export default Theme;
