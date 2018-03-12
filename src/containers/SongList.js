import React, { Component } from 'react'
import { connect } from 'react-redux'
import selectContact from '../actions/index'
import upVote from '../actions/index'
import downVote from '../actions/index'
import {bindActionCreators} from 'redux'

class ContactList extends Component {
  renderList() {
    return this.props.contacts.map((songs) => {
      return (
        <li
        key={songs.id}
        onClick={() => this.props.selectContact(songs)}
        className='list-group-item' style={{'backgroundColor': '#2E3032', 'color': 'white'}}>
        <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
        <h3 style={{'display':'inline-block', 'width': '40%'}}>{songs.name}</h3>
        <span>{songs.votes}</span>
        <div>
        
        <button 
        className="btn" 
        style={{'margin': '0 0.5rem', 'color': 'black'}}
        onClick={() => this.props.upVote(songs)}
        >
        <i className="fas fa-plus"></i>
        </button>
        <button 
        className="btn" 
        style={{'color': 'black'}}
        onClick={() => this.props.downVote(songs)}
        >
          <i className="fas fa-minus"></i>
        </button>
          </div>
        </div >
        </li >
      );
    });
  }
render() {
  return (
    <ul className = 'col-sm-12 col-md-12' style={{'margin': '2em 0 2em'}}>
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
  return bindActionCreators({selectContact: selectContact, upVote: upVote, downVote: downVote}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
