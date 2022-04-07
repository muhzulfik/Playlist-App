import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { selectToken, setToken } from "../store/tokenSlice";
import { LoginPage } from "../pages/Main/LoginPage";
import Search from "../pages/Search";
import CreatePlaylist from "../pages/Playlist/CreatePlaylist";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthenticatedRoute from "../components/AuthenticatedRoute";
import useUsers from "../store/usersStore";

const AppRouter = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const fetchUser = useUsers((state) => state.fetch);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      dispatch(setToken(token));
    }
    fetchUser();
  }, []);

  console.log({ token });

  return (
    <BrowserRouter>
      <Switch>
        <AuthenticatedRoute path="/" component={LoginPage} exact />
        <ProtectedRoute path="/search" component={Search} />
        <ProtectedRoute path="/create-playlist" component={CreatePlaylist} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
