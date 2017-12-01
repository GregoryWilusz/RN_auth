import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => {
    return(
        // We keep the View tag because it will be nice and easy to position Spinner on the screen.
        <View style={styles.spinnerStyle}>
            <ActivityIndicator
                size={ size || 'large'} // it's a ActivityIndicator's default property with 2 options: large/small. If we pass in a 'size' property then use that. Otherwise, use 'large'!
            />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export {Spinner};