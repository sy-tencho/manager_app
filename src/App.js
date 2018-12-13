import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: 'AIzaSyCM4oaDqHii0I0LrzzzAfXPoMJmr6mk6so',
            authDomain: 'manager-29ae1.firebaseapp.com',
            databaseURL: 'https://manager-29ae1.firebaseio.com',
            projectId: 'manager-29ae1',
            storageBucket: 'manager-29ae1.appspot.com',
            messagingSenderId: '240681675937'
        };
        firebase.initializeApp(config);
    }
    render() {
        return(
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;