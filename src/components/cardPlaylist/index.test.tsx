import { render, screen } from "@testing-library/react";
import CardPlaylist from ".";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const image =
  "https://i.scdn.co/image/ab67616d0000b273fc8633e22a7dba6aab817bff";
const name = "Memories";

it("Render Playlist components", () => {
  render(
    <Provider store={store}>
      <CardPlaylist image={image} name={name} />
    </Provider>
  );

  const imgRender = screen.getByAltText("Playlist");
  expect(imgRender).toBeInTheDocument();

  const imgElement = screen.getByAltText("Playlist");
  expect(imgElement.getAttribute("src")).toBe(image);

  const trackTitleElement = screen.getByText(name);
  expect(trackTitleElement).toBeInTheDocument();
});
