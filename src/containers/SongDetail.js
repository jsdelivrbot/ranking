import React, { Component } from 'react';
import {connect} from 'react-redux'

class ContactDetail extends Component {
	render() {
		if (!this.props.contact) {
			return (
				<div>Aquí va la canción actual</div>
			);
		}
		return (
			<div>
				<div style={{'width': '50%', 'display': 'inline-block'}}>
				<h1>Song: {this.props.contact.name}</h1>
				<span>Author: {this.props.contact.author}</span>
				</div>
				<img style={{'width': '40%', 'height': '40%'}}
            src={this.props.contact.img}/>
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
