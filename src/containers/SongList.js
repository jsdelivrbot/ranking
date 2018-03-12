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
        <i className="fas fa-plus"></i>
        </button>
        <button className="btn">
   
        </button>
          </div>
        </div>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="container"><ul className = 'list-group'>
        {this.renderList()}
      </ul></div>
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
