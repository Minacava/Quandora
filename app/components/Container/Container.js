import React from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground

} from 'react-native';
import styles from './styles';

const Container = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <ImageBackground
                style={styles.containerImage}
                resizeMode="cover"
                source={require('../Logo/images/cover.png')} >
            </ImageBackground>
            {children}
        </View>
    </TouchableWithoutFeedback >
)
Container.propTypes = {
    childre: PropTypes.any,
};

export default Container;