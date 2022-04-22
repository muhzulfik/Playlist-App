import { ChakraProvider, theme } from "@chakra-ui/react";
import AppRouter from "./routes";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  </Provider>
);
