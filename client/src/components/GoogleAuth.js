import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '52296544726-boi1el5ahubnub3fftjteh95f900300i.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    renderAuthBtn() {
        if (this.state.isSignedIn === null) {
            return (
                <div>I don't know if I am signed in!</div>
            );
        } else if (this.state.isSignedIn) {
            return (
                <div>I am signed in!</div>
            );
        } else {
            return (
                <div>I am not signed in.</div>
            );
        }
    };

    render() {
        return (
            <div>{this.renderAuthBtn()}</div>
        );
    };
};

export default GoogleAuth;