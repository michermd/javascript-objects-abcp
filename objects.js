var playlist = {
  artistName: 'songTitle'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;

  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  return(delete playlist.artistName);
}
// function updateObjectWithObject(targetObject, updatesObject) {
//   return Object.assign({}, targetObject, updatesObject)
// }
