// import libraries for making a componet
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: 'f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20},
        // shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
// Make a component available to other parts of the app
export { Header };