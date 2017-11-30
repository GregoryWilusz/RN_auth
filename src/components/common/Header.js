import React from 'react';
import {Text, View} from 'react-native';  // View tag is used to position, wrap and style elements inside of our app

// 1 - we know we want this Header text to be provided by parent component
// 2 - we are going to provide a reference to that prop's object that comes from the parent
// 2 whenever the Header component is created  it will be called with a prop's object that will be the 1st argument to this function

//props is a JS object and it'll have a property that we're going to pass on it
const Header = (props) => {                     // step 2 is going here!
    // Destructing of a reference to styles
    const {textStyle, viewStyle} = styles;


    return (
        <View style={viewStyle}>
            {/*  style={textStyle} -> it is referred to as a PROP (short for properties) */}
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// New object to style the header. It consists of JS objects that have certain properties the set the size, color, etc.
// Flexbox is a system of positioning elements within container
const styles = {
    viewStyle: {
        backgroundColor: "#F8F8F8",
        justifyContent: 'center', // to position elements vertically (flex-start(default), center, flex-end)
        alignItems: 'center', // to position elements horizontally (flex-start(default), center, flex-end)
        height: 60,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2, // Android shadow
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};


// Make the component available to other parts of the app
export { Header };