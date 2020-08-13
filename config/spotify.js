const Spotify = require("spotify-web-api-node");
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.SPOTIFY_CLIENT_ID);

// var spotifyApi = new Spotify({
//   clientId: process.env.SPOTIFY_CLIENT_ID,
//   clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
//   //   redirectUri: "http://localhost:9000/music/callback",
// });

spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE").then(
  function (data) {
    console.log("Artist albums", data.body);
  },
  function (err) {
    console.error(err);
  }
);
