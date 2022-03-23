import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Box
          as="main"
          flexGrow={1}
          minH={{ base: "xl", lg: "xl" }}
          bgPos="bottom"
          bgRepeat="no-repeat"
          bgSize="contain"
          overflow="hidden"
        >
          {this.props.children}
        </Box>
        <Footer />
      </>
    );
  }
}
export default Layout;
