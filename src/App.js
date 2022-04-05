import React from "react";
import Layout from "./components/MainLayout";
import store from "./store/store";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { RouteList } from "./config";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Layout>
          <RouteList />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}
export default App;
