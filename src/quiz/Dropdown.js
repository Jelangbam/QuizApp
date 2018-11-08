import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';
class Dropdown extends Component { 
	constructor(props) {
		super(props);
		const data = require('./data/quizDirectory.json');
		this.state = {
			selected: false,
			headerTitle: this.props.title,
			data: data.quizzes
		};

		this.setSelected = this.setSelected.bind(this);
	}

	setSelected(item) {
		this.setState({
			headerTitle: item.title,
			selected: true
		});
		this.props.handleQuizChange(item.type);
	}


	render() {
		return (
			<div className='Dropdown'>
				<div className='Dropdown-header' onMouseEnter={this.props.enableDropdown}>
				<h1>{this.state.headerTitle}</h1>
				</div>
				{ this.props.dropdownActive && <ul className='Dropdown-list' onMouseLeave={this.props.disableDropdown}>
					{ this.state.data.map((item) => (
						<li className='Dropdown-data' key={item.type} type="square" onClick={() => this.setSelected(item)}>
						{item.title}
						</li>
					))
					}
				</ul>}
			</div>
		);
	}
}

Dropdown.propTypes = {
	title: PropTypes.string,
	disableDropdown: PropTypes.func.isRequired,
	enableDropdown: PropTypes.func.isRequired,
	dropdownActive: PropTypes.bool.isRequired,
	handleQuizChange: PropTypes.func.isRequired
};

export default Dropdown;