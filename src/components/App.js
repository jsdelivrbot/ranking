import React, { Component } from 'react';
import ContactList from '../containers/SongList'
import ContactDetail from '../containers/SongDetail'

export default class App extends Component {
  render() {
    return (
      <div>
      	<ContactList />
      	<ContactDetail />
      </div>
    );
  }
}
