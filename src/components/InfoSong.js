import React from 'react';
import './InfoSong.css';
import PropTypes from 'prop-types';

const InfoSong = ({name, author, songs}) => (
  songs.map((song, index) => {
    if(index === 0) {
      return <div key={name} className="active">
       <h1>{name}</h1>
       <p>{author}</p>
      </div>
    } else {
      return;
    }
  })
)

InfoSong.proptypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default InfoSong;