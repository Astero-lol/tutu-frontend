import React, { Component } from 'react';

export default class SortItem extends Component {
    constructor() {
		super();
		this.state = {
			sortActive: true,
			currentClass: 'table__thead'
		}
	}

    handleClick() {
        const { sortTitle } = this.props;
		const { sortActive } = this.state;
		this.props.sort(sortTitle, sortActive);

		var sortHead = document.querySelectorAll('.table__thead');

		for(let i = 0; i < sortHead.length; i++) {
			sortHead[i].className = '.table__thead';
		}

		if (sortActive) {
			this.setState({
				sortActive: false,
				currentClass: 'table__thead up'
			});
		} else {
			this.setState({
				sortActive: true,
				currentClass: 'table__thead down'
			});
		}

	}

    render() {
        return(
          <th
			  onClick={this.handleClick.bind(this)}
			  data={this.props.sortTitle}
			  className={this.state.currentClass}
		  >
			  <p className='table__thead-value'>{this.props.title}</p>
		  </th>
        );
    }
}