import * as React from "react";
import { render } from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);
