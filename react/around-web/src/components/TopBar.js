import React from 'react';
import logo from '../assets/images/logo.svg';

export class TopBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-title">Around</div>
                {this.props.isLoggedIn ?
                    <a className="logout" onClick={this.props.handleLogout}>Log out</a> : null}
            </header>
        );
    }
}