import React, { Component } from 'react';

import UserList from './UserList';

import './../style/style.less';

export default class App extends Component{
    render() {
        return (
            <div className='App'>
                <UserList />
            </div>
        );
    }
};

