import React from 'react';
import PropTypes from 'prop-types';

const InfoSong = ({name, author}) =>(
  <div>
    <h1>{name}</h1>
    <p>{author}</p>
  </div>
)

InfoSong.proptypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default InfoSong;