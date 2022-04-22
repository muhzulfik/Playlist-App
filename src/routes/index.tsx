import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "../pages";
import CreatePlaylistPage from "../pages/playlist/create-playlist";
import PlaylistDetailPage from "../pages/playlist/playlist-detail";
import SearchPage from "../pages/search";
import LoginPage from "../pages/login-auth";
import AuthRoute from "../components/authRoute";
import PrivateRoute from "../components/protectedRoute";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <AuthRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/home" component={MainPage} />
        <PrivateRoute path="/search" component={SearchPage} />
        <PrivateRoute path="/create-playlist" component={CreatePlaylistPage} />
        <PrivateRoute path="/playlist/:id" component={PlaylistDetailPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
