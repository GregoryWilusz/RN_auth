import React, {Component} from 'react';
import {Card, CardSection, Button, Input} from "./common";

class LoginForm extends Component {
    state = {email : '', password: ''}; // Initializing state object to have a single property of text and this property will start of as an empty string.

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

                    <CardSection>
                        <Button>Log in</Button>
                    </CardSection>
                </Card>

        );
    }
}

export default LoginForm;