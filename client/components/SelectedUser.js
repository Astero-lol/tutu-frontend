import React, { Component } from 'react';

export default class SelectedUser extends Component{

	componentDidUpdate(prevProps) {
		if(this.props.description !== prevProps.description)
		this.refs.textarea.value = this.props.description;
	}

	render() {
		return (
			<div className="selected-user">
				<p className="selected-user__name">Выбран пользователь {this.description} {this.props.firstName} {this.props.lastName}</p>
				<div className="selected-user__textarea">
					<p className="selected-user__label">Описание:</p>
					<textarea name="name"  ref="textarea" defaultValue={this.props.description}></textarea>
				</div>
				<div className="selecter-user__info">
					<dl className="selected-user__item">
						<dt className="selected-user__label">Адрес проживания:</dt>
						<dd className="selected-user__value">{this.props.streetAddress}</dd>
					</dl>
					<dl className="selected-user__item">
						<dt className="selected-user__label">Город:</dt>
						<dd className="selected-user__value">{this.props.city}</dd>
					</dl>
					<dl className="selected-user__item">
						<dt className="selected-user__label">Провинция/штат:</dt>
						<dd className="selected-user__value">{this.props.state}</dd>
					</dl>
					<dl className="selected-user__item">
						<dt className="selected-user__label">Индекс:</dt>
						<dd className="selected-user__value">{this.props.zip}</dd>
					</dl>
				</div>
			</div>
		)
	}
};