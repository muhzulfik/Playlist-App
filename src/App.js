import React, { useEffect, useState } from "react";
import Home from "./pages";
import CreatePlaylist from "./pages/Playlist/CreatePlaylist";
import Playlist from "./pages/Playlist";
import Layout from "./components/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import getUserId from "./api/getuser";
import userStore from "./store/userStore";

function App() {
  const setUserId = userStore((state) => state.setId);

  useEffect(() => {
    getUserId().then((res) => setUserId(res));
  }, []);

  return (
    <ChakraProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route
              path="/playlist/createplaylist"
              element={<CreatePlaylist />}
            />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ChakraProvider>
  );
}
export default App;
