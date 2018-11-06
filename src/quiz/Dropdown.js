import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';
class Dropdown extends Component { 
	constructor(props) {
		super(props);
		const data = require('./data/quizDirectory.json');
		this.state = {
			active: false,
			headerTitle: this.props.title,
			data: data.quizzes,
			selected: false
		};
		this.toggleActive = this.toggleActive.bind(this);
		this.setSelected = this.setSelected.bind(this);
	}

	setSelected(item) {
		this.setState({
			headerTitle: item.title,
			selected: true
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
			<div className='Dropdown'>
				<div className='Dropdown-header' onClick={this.toggleActive}>
				<h1>{this.state.headerTitle}</h1>
				</div>
				{ this.state.active && <ul className='Dropdown-list'>
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
	handleQuizChange: PropTypes.func,
};

export default Dropdown;