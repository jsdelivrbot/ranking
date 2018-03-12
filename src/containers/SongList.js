import React, {Component} from 'react'
import {connect} from 'react-redux'
import selectContact from '../actions/index'
import {bindActionCreators} from 'redux'

class ContactList extends Component {
  renderList() {
    return this.props.contacts.map((songs) => {
      return (
        <li
        key={songs.id}
        onClick={() => this.props.selectContact(songs)}
        className='list-group-item'>
        <div>
        <h3>{songs.name}</h3>
        <span>{songs.votes}</span>
        <div>
        <button className="btn">
        <b>+</b>
        </button>
        <button className="btn">
          <b>-</b>
        </button>
          </div>
        </div>
        </li>
      );
    });
  }
  render() {
    return (
      <ul className = 'list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectContact: selectContact}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
