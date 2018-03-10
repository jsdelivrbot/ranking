import React from 'react'
import PropTypes from 'prop-types'

const Song = ({name}) => (
  <li
    style={{
      marginBottom: 5
    }}
  >
    <span style={{ width: 200, display: 'inline-grid' }}>{name}</span>
    <button
      style={{ marginLeft: 10 }}
    >
      <b>+</b>
    </button>
    <button
      style={{ marginLeft: 10 }}
    >
      <b>-</b>
    </button>
  </li>
)

Song.propTypes = {
  name: PropTypes.string.isRequired
}

export default Song
