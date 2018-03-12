import React, { Component } from 'react';
import {connect} from 'react-redux'

class ContactDetail extends Component {
	render() {
		if (!this.props.contact) {
			return (
				<div>Click one of the contacts to see details.</div>
			);
		}
		return (
			<div>
				<h1>Song: {this.props.contact.name}</h1>
				<div>Author: {this.props.contact.author}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    contact: state.activeContact
  };
}

export default connect(mapStateToProps)(ContactDetail)
