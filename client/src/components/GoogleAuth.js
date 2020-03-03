import React, { Component } from 'react';

class GoogleAuth extends Component {
    componentDidMount = () => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientID: '52296544726-boi1el5ahubnub3fftjteh95f900300i.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    };

      render() {
        return (
            <div className='Google Auth' />
        );
    };
};

export default GoogleAuth;