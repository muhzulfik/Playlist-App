import { render, screen } from "@testing-library/react";
import CardTrack from ".";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const imgUri =
  "https://i.scdn.co/image/ab67616d0000b273fc8633e22a7dba6aab817bff";
const titleTrack = "Memories";
const artistName = "Maroon 5";
const albumName = "Emote Pa More";
const durationTrack = 24000;
const uriTrack = "spotify:track:asjhbdyuasagua";

it("Render Tracks components", () => {
  render(
    <Provider store={store}>
      <CardTrack
        imgUri={imgUri}
        titleTrack={titleTrack}
        artistName={artistName}
        albumName={albumName}
        durationTrack={durationTrack}
        uriTrack={uriTrack}
      />
    </Provider>
  );

  const imgRender = screen.getByAltText(albumName);
  expect(imgRender).toBeInTheDocument();

  const imgElement = screen.getByAltText(albumName);
  expect(imgElement.getAttribute("src")).toBe(imgUri);

  const trackTitleElement = screen.getByText(titleTrack);
  expect(trackTitleElement).toBeInTheDocument();

  const artistNameElement = screen.getByText(artistName);
  expect(artistNameElement).toBeInTheDocument();

  const durationTrackElement = screen.getByTestId("custom-element");
  expect(durationTrackElement).toBeInTheDocument();
});
