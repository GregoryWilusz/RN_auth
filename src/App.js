import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCAm0DejDjRvHOjJY7Rvz6YpmCdla_IWAY",
            authDomain: "auth-4bf62.firebaseapp.com",
            databaseURL: "https://auth-4bf62.firebaseio.com",
            projectId: "auth-4bf62",
            storageBucket: "auth-4bf62.appspot.com",
            messagingSenderId: "832749778874"
        }
    );
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}