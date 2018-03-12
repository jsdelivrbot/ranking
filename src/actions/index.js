function selectContact(contact) {
  return {
    type: 'CONTACT_SELECTED',
    payload: contact
  }
}

function upVote(objectSongs) {
  return { 
    type: 'UP_VOTE',
    payload: objectSongs,
    id: objectSongs.id
  }
}

 
function downVote(songs) {
  return {
    type: 'DOWN_VOTE', 
    payload: songs,
    id: songs.id
  }
}

export default selectContact;

/* Si quieres ver que aumenten o disminuyan los votos, exportar upVote o downVote respectivamente*/