import React, { Component } from 'react'
import { connect } from 'react-redux'
import selectContact from '../actions/index'
import { bindActionCreators } from 'redux'

class ContactList extends Component {
  renderList() {
    return this.props.contacts.map((songs) => {
      return (
        <li
          key={songs.id}
          onClick={() => this.props.selectContact(songs)}
          className= 'list-group-item' style = {{ 'backgroundColor': '#2E3032', 'color': 'white' }
            }>
           <div style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
            <h3 style={ { 'display': 'inline-block', 'width': '40%' } }> { songs.name }</h3>
            <span style={{'textAlign': 'right'}}>{songs.votes}</span>
            
          <div>
            <button className="btn" style={{ 'margin': '0 1em 0 2em', 'color': 'black' }}>
              <i className="fas fa-plus"></i>
            </button>
            <button className="btn" style={{ 'color': 'black' }}>
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
  return bindActionCreators({ selectContact: selectContact }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
