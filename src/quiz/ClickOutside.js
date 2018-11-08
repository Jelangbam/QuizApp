import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickOutside extends Component {
	constructor(props) {
		super(props);
		this.setRef = this.setRef.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClick);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClick);
	}

	setRef(ele) {
		this.innerRef = ele;
	}

	handleClick(event) {		
		if(this.innerRef && !this.innerRef.contains(event.target)) {
			this.props.disableDropdown();
		}
	}

	render() {
		return <div ref={this.setRef}> {this.props.children} </div>;
	}
}

export default ClickOutside;

ClickOutside.propTypes = {
	disableDropdown: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired
};