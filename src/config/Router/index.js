import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Search from "../../pages/Search";
import CreatePlaylist from "../../pages/Playlist/CreatePlaylist";
import { LoginPage } from "../../pages/Main/LoginPage";

const RouteList = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/createplaylist" element={<CreatePlaylist />} />
      </Routes>
    </Router>
  );
};

export default RouteList;
