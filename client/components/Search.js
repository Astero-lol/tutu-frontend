import React, { Component } from 'react';

export default class Search extends Component {
	handleClick(e) {
		var search = this.refs.search,
			query = search.value;
		
		this.props.filter(query);
	}

	render() {
		return (
			<div className="form form-inline">
				<input type="search" ref="search" className="form__field form-control" />
				<button onClick={this.handleClick.bind(this)} className="btn btn-success">Search</button>
			</div>
		)
	}
}