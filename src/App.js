import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import  Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        
        return(
            <Provider store={ store }>
                <Router />
            </Provider>
        );
    }
}

export default App;