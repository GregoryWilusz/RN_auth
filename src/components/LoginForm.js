import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Card, CardSection, Button, Input, Spinner} from "./common";

class LoginForm extends Component {
    state = {email: '', password: '', error: '', loading: false};               // Initializing state object to have a single property of text and this property will start of as an empty string.
                                                                                // We using STATE to cause our component to rerender!
    onButtonPress() {   // This is our point in time to actually log the user in. Here we try to authenticate the user. We need to import a firebase framework. And use a method on firebase object
        const { email, password } = this.state; // deconstruction of this.state -> reference to this.state. Now we got access to email and password variables WITHIN this function to authenticate a user.

        this.setState({error: '', loading: true});                              // The instant that a user press the button, we're going to clear out any existing errors that are on the screen and
                                                                                // we are also going to flip the loading flag to true.
        firebase.auth().signInWithEmailAndPassword(email, password) // This statement returns a PROMISE. A promise in JS is a construct for handling some amount of asynchronous code when we auth a user.
            .then(this.onLoginSuccess.bind(this))                               // It makes an actual request to the firebase server and that takes some amount of time to actually make that request.
            .catch( () => {                                                     // .catch() case. It says if this request (line above) fails. Look at diagram in the folder with a flow of this process!
                // onLoginSuccess is a function that we are passing to promise that is going to be invoked sometime in the future
                // and we don't know the context that it will be called with, we have to BIND the context to 'this' like so.
                // Pay attention to not add () after the nme of the function passed into a promise! Just "this.functionName.bind(this)".
                firebase.auth().createUserWithEmailAndPassword(email, password) // If the user fais to sign in, we want to create an account. It also returns a promise because it's also asynchronous method.
                    .then(this.onLoginSuccess.bind(this))                       // That is why we chain another .catch and pass in federal function.
                    .catch(this.onLoginFail.bind(this));
                // We always rerender components by using components level STATE. We introduce a new proprety on our state objects called error. Whenever we use state, we have to
                // default our new property. And after settin a new state we have to place a new state somewhere inside a render method.
            });
    }

    onLoginFail() { // another helper method to make the code above more legible and stop the spinner
        this.setState( {error: 'Authentication failed.', loading: false})
    };

    onLoginSuccess() { //helper method to handle when user successfully signs in
        this.setState({
           email: '',
           password: '',
           loading: false,
           error: ''        // now it is not necessary but if we would implement some further validation...
        });
    };

    renderButton() { // Helper method to show either spinner or button.
        if (this.state.loading) {
            return <Spinner size='small'/>
        }

        // Otherwise show the Button object by default (alternative is an 'else' statement bind to if):
        return (
            <Button whenPressed={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return(

                <Card>
                    <CardSection>
                        <Input
                            // we didn't defined a secureTextEntry prop, so JS treat is as undefined which is FALSE
                            placeholder='user@gmail.com'
                            label='Email'
                            value={this.state.email} // prop of value that we passed to that TextInput
                            onChangeText={text => this.setState({ email: text })} // Added another prop of onChangeText and in this prop {} we'll pass a fat arrow function. It's going to be called with one
                                                // argument (text) and as soon as this function is called we are going to set our state with that text ( => this.setState( {text} ) ). In a new syntax
                                                // it's goin to be: {text => this.setState({ text: })} -> setting the property text with the text that this function is called!!!
                                                // IT ONLY WORKS WHEN THE NAMES OF PROP AND ARGUMENT ARE THE SAME!
                            style={{ width: 100, height: 20}}/>
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder='password'
                            label='Password'
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}  // Here I use shorten syntax, but either password or email (above) are actually text that user input! And it is an
                                                                                    // argument for the function called by the event.
                        />
                    </CardSection>

                    {/* The key is that when the component boots up, this state is going to be an empty string. By default the user does not see the message.*/}

                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>

                    {/* We need to add callback function to the button onPress prop. We create a helper method onButtonPress.
                        Because we are passing this thing callback function, because this is a function that would be called at some point in the future, we are going to BIND the context to THIS.
                        Now we have to define a helper method below the state. */}
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>

        );
    }
}

const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
};

export default LoginForm;