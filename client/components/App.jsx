import React, { Component } from 'react';

import UserList from './UserList';

import './../style/style.less';

export default class App extends Component{
    render() {

		function dscount(string, target) {
			var result = string.match(target);
			// console.log(result.length);
		}

		var reg = /s1|s2?=s1|s2{1,}/ig;
		var string = 's2';
		dscount(string, reg)


        return (
            <div className='App'>
                <UserList />
            </div>
        );
    }
};

