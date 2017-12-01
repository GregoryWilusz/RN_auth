import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };
    // new state has been created to track whether a user is signed in or out. Instead of false value we set null, because it's a middle-state between true of false. Null means we have no idea you
    // are logged in or out.

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCAm0DejDjRvHOjJY7Rvz6YpmCdla_IWAY",
            authDomain: "auth-4bf62.firebaseapp.com",
            databaseURL: "https://auth-4bf62.firebaseio.com",
            projectId: "auth-4bf62",
            storageBucket: "auth-4bf62.appspot.com",
            messagingSenderId: "832749778874"
        });
        // onAuthStateChange is a event handler (CALLBACK) that accepts a function. Whenever the user signs in/out you know as many times as they might do as we have our app opened, federal function below, e.g.:
        // () => will be called. This federal function will be called with on argument - user. If the user sigh in, this user argument WILL BE AN OBJECT that represents the user! If the user sign out it
        // it will be no or undefined.

        // If there is a user, then loggedIn is true
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true: // Yep, you logged in
                return (
                        <View style={{height: 45, marginTop: 10}}>
                            {/*Passing event handler within onPress*/}
                            <Button whenPressed={() => firebase.auth().signOut()}>
                                Log out
                            </Button>
                            {/* When we press the button, the instant I signed my user OUT, we are going to expect that our authentication state is changing (line with this.setState({loggedIn: false});
                            and then line return <LoginForm />; will execute showing a login form. */}
                       </View>
                );
            case false:
                return <LoginForm />;               // Nope, you definetely not logged in
            default:
                return <Spinner size='large'/>;                    // this.state.loggedIn is null

        }
    }

    render() {
        return(
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;