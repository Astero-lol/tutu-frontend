import React, { Component } from 'react';

export default class User extends Component {
	render() {
		return (
			<tr className="table__row" key={this.props.key} onClick={this.props.function}>
				<td className="table__cell">{this.props.id}</td>
				<td className="table__cell">{this.props.firstName}</td>
				<td className="table__cell">{this.props.lastName}</td>
				<td className="table__cell">{this.props.email}</td>
				<td className="table__cell">{this.props.phone}</td>
			</tr>
		)
	}
}