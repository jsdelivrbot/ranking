export default function (state= null, action) {
    switch (action.type) {
      case 'UP_VOTE': 
      let object = action.payload;
      if (action.id === object.id) {
        return {...state, votes: parseInt(object.votes) + 1} 
      } else {
        return song
      }
       
      default:
       return state
    }
  }