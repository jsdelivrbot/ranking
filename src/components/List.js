import React from 'react'
import Song from './Song'
import '../App.css'

const songs = [
    {id: 1, name: 'BBoom BBoom', votes: '27', author: 'Momoland'},
    {id: 2, name: 'Let it go', votes: '43', author: 'James Bay'},
    {id: 3, name: 'Roar', votes: '15', author: 'Katy Perry'},
    {id: 4, name: 'Heroic Advent', votes: '8', author: 'Roselia'},
    {id: 5, name: 'Alive again live in manila', votes: '39', author: 'Planetshakers'},
    {id: 6, name: 'Wonder', votes: '2', author: 'Hillsong'}
];


const List = () => (
    <ul>
      {songs.map(song =>
        <Song
          key={song.id}
          {...song}
        />
      )}
    </ul>
  )
  
  export default List