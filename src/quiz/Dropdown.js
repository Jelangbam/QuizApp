import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import '../App.css';

class Dropdown extends Component { 
	constructor(props) {
		super(props);
		const data = require('./data/quizDirectory.json');
		this.state = {
			active: false,
			headerTitle: this.props.title,
			data: data.quizzes
		};
		this.disableDD = this.disableDD.bind(this);
		this.toggleActive = this.toggleActive.bind(this);
		this.setSelected = this.setSelected.bind(this);
	}

	disableDD() {
		this.setState({
			active: false,
		});
	}

	setSelected(item) {
		this.setState({
			active: false,
			headerTitle: item.title,
		});
		this.props.handleQuizChange(item.type);
	}

	toggleActive() {
		this.setState((prevState) => ({
			active: !prevState.active,
		}));
	}

	render() {
		return (
			<div className='dropdown'>
				<div className='dropdownHeader' onClick={this.toggleActive}>
				<h1>{this.state.headerTitle}</h1>
				</div>
				{ this.state.active && <ul className='dropdownList'>
					{ this.state.data.map((item) => (
						<li className='dropdownData' key={item.type} onClick={() => this.setSelected(item)}>
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
	handleQuizChange: PropTypes.func,
};

export default Dropdown;