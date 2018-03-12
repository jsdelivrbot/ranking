import React, { Component } from 'react';
import {connect} from 'react-redux'

class ContactDetail extends Component {
	render() {
		if (!this.props.contact) {
			return (
				<div>
					<h1 style={{'text-align': 'center'}}>Elige una canción</h1>
					</div>
			);
		}
		return (
			<div>
				<div style={{'width': '50%', 'display': 'inline-block', 'text-align': 'center'}}>
				<h1>{this.props.contact.name}</h1>
				<span>Author: {this.props.contact.author}</span>
				</div>
				<img style={{'width': '40%',  'display': 'inline-block'}}
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
