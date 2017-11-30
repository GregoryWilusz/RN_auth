import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

export default class App extends Component {
    render() {
        return(
            <View>
                <Header headerText="Authentication"/>
                <Text>An app</Text>
            </View>
        );
    }
}