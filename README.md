# Playlist App

Playlist App is a Spotify clone application that uses the Spotify Developers API. This application was built during the Generasi GIGIH 2.0 2022.

## Feature

* Login with Spotify account
* User profile
* Search tracks
* List all tracks in playlist
* List users playlist
* Playlist detail
* Create new playlist


## Stacks
* React, Typescript
* Chakra UI
* State management: Redux, Zustand
* Testing: Testing-Library
* Linter: ESLint
* Deployment: Vercel

## Production
https://playlist-app.vercel.app/

## How to use this repo
1. Clone This Repo
```bash
git clone https://github.com/muhzulfik/Playlist-App
```
2. Open the dir on your terminal
```bash
cd Playlist-App
```
3. Install Dependencies
```bash
npm install
```
4. Set up Spotify Developers API
```bash
https://developer.spotify.com/documentation/web-api/guides/
```
5. Start Server
```bash
npm start
```
# How to use the App
## Log in  to the App
1. Click Login Spotify
2. Input Username and Password
3. After successful authentication, create playlist page of Playlist-App will appear.
## Search Track
1. Click the search menu on the navbar
2. Type the keyword in the search box (example: "Maroon 5"), then press Enter on the keyboard and the search results will be displayed.
3. Choose your track to add to the playlist to be created
## Create Playlist
1. Click the create-playlist menu on the navbar
2. Input playlist title
3. Input playlist description
4. Press Enter to create a new playlist
## List Playlist
1. Click the home menu on the navbar
2. The Home Page will display the user profile and list of playlists that have owned
3. Click the Card Playlist list to see details of playlist contents such as playlist description and song playlist
