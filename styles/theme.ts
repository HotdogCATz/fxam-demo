// theme.ts
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  // Add other customizations to your theme here if needed
});

export default theme;
