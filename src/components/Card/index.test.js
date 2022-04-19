import { render, screen } from "@testing-library/react";
import Card from "../Card/index.tsx";
import { Provider } from "react-redux";
import store from "../../store/store";

const img = "https://i.scdn.co/image/ab67616d0000b273fc8633e22a7dba6aab817bff";
const title = "Memories";
const artist = "Maroon 5";
const albumName = "Emote Pa More";
const uri = "spotify:track:asjhbdyuasagua";

it("Render Tracks components", () => {
  render(
    <Provider store={store}>
      <Card
        img={img}
        title={title}
        artist={artist}
        albumName={albumName}
        uri={uri}
      />
    </Provider>
  );

  const imgRender = screen.getByAltText(albumName);
  expect(imgRender).toBeInTheDocument();

  const imgElement = screen.getByAltText(albumName);
  expect(imgElement.getAttribute("src")).toBe(img);

  const trackTitleElement = screen.getByText(title);
  expect(trackTitleElement).toBeInTheDocument();

  const artistNameElement = screen.getByText(artist);
  expect(artistNameElement).toBeInTheDocument();
});
