import * as React from "react";
import Home from "./pages";
import Layout from "./component/Layout";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Home />
      </Layout>
    </ChakraProvider>
  );
}
export default App;
