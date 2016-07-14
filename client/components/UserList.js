import React, { Component } from 'react';
import axios from 'axios';

import Search from './Search';
import SortItem from './SortItem';
import SelectedUser from './SelectedUser';
import Preload from './Preload';
import User from './User';

export default class UserList extends Component {
	constructor(){
		super();
		this.state = {
			data: [],
			selectedUser: false,
			preload: false
		};
		// this.loadData('http://www.filltext.com/?rows=400&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}')
	}
	
	loadData(url) {
		this.preload = true;
		axios.get(url).then((response, error) => {
			this.data = response.data;
			this.setState({
				data: this.data,
				preload: false
			});
		}).catch(function (error) {
			alert(error);
		});
	}

	filter(query) {
		query = query.toLowerCase();
		var items = this.data.filter((el) => {
			var hasFirstName = el.firstName.toLowerCase().indexOf(query) !== -1,
				hasLastName = el.lastName.toLowerCase().indexOf(query) !== -1,
				hasId = el.id.toString().indexOf(query) !== -1;

			if(  hasFirstName|| hasLastName || hasId) {
				return el
			}
		});

		this.setState({
			data: items
		});
	}

	sort(el, isActive) {
		var selector = el;

		var sortItems = this.data.sort((a, b) => {
			if(a[selector] < b[selector]) return -1;
			if(a[selector] > b[selector]) return 1;
			return 0
		});

		isActive ? this.setState({ data: sortItems }) : this.setState({ data: sortItems.reverse() });
	}

	selected(index) {
		this.setState({
			selectedUser: <SelectedUser
				firstName={this.state.data[index].firstName}
				lastName={this.state.data[index].lastName}
				description={this.state.data[index].description}
				streetAddress={this.state.data[index].adress.streetAddress}
				city={this.state.data[index].adress.city}
				state={this.state.data[index].adress.state}
				zip={this.state.data[index].adress.zip}
			/>
		})
	}

	render() {
		return (
			<div>
				{this.state.preload ? <Preload /> : null}
				<Search filter={this.filter.bind(this)} />
				<table className="table table-hover table-bordered">
					<thead>
					<tr className="table__thead-row">
						<SortItem
							title="id"
							sort={this.sort.bind(this)}
							sortTitle='id'
						/>
						<SortItem
							title="First name"
							sort={this.sort.bind(this)}
							sortTitle='firstName'
						/>
						<SortItem
							title="Last name"
							sort={this.sort.bind(this)}
							sortTitle='lastName'
						/>
						<th>email</th>
						<th>phone</th>
					</tr>
					</thead>
					<tbody>
					{
						this.state.data.map((el, index) => {
							return (
								<User
									function={this.selected.bind(this, index)}
									key={index}
									id={el.id}
									firstName={el.firstName}
									lastName={el.lastName}
									email={el.email}
									phone={el.phone}
								/>
							)
						})
					}
					</tbody>
				</table>
				{this.state.selectedUser}
			</div>
		);
	}
}