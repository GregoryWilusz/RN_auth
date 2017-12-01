import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, onChangeText, value, placeholder, secureTextEntry}) => {
    const {inputStyle, labelStyle, containerStyle} = styles;

    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}   // By convention when property has a boolean value and we want it to be set to 'true', we can omit '={true}' syntax.
                placeholder={placeholder}
                autoCorrect={false}                 // NICE!
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,       // To make sure user'll see what he types
        lineHeight: 23,     // How much space is between each line of text
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1     // InputText ant the Text are the children (siblings) of View tag. Whenever we have siblings with a flex property designated (pointed at) on the style objects the flex property
                    // is how we ALLOCATE or a proportion available space to each one. FOR EACH SIBLINGS we add up flex values (here 2+1, which takes 3) and 2 we divide by 3. So 2/3 will be allocated
                    // by a inputStyle, and 1/3 will be allocated by a labelStyle.
    },
    containerStyle: {
        height: 40,
        flex: 1,    // to make sure that it fills up all the available space and then we want to make sure that label and textInput themselves show up alongside each other.
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export {Input};