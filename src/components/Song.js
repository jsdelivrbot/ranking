import React from 'react'
import PropTypes from 'prop-types'
import '../App.css';

const Song = ({name}) => (
  <li
    className="listStyle"
  >
    <h3 className="song">{name}</h3>
    <button
      className="btn"
    >
      <b><i class="fas fa-plus"></i></b>
    </button>
    <button
      className="btn"
    >
      <b><i class="fas fa-minus"></i></b>
    </button>
  </li>
)

Song.propTypes = {
  name: PropTypes.string.isRequired
}

export default Song
