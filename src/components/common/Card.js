import React from 'react';
import {View} from 'react-native';

const Card = (props) => {

    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
        // {props.children} will render any components that we passed to this current one!
        // for example: it executes line from AlbumDetail: <Text>{props.album.title}</Text> and replaces it instead of {props.children}!
        // We use it when we know we will wrap within parent component some another components.
    );
};

const styles = {
  containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2, // Because borderRadius is also 2
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
  },
};

export { Card };