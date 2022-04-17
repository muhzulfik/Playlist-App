import React from "react";
import Layout from "./components/MainLayout";
import store from "./store/store";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import AppRouter from "./routes/index.jsx";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}
export default App;
